const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "latex_management",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to database");
  db.query(
    `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(15),
    password VARCHAR(255)
  )`,
    (err, result) => {
      if (err) throw err;
      console.log("Users table created or already exists");
    }
  );
});

// Register route
app.post("api/register", (req, res) => {
  const { name, email, phone, password } = req.body;

 
  // Password hashing
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Insert user into database
  db.query(
    "INSERT INTO admin_details (name, email, phone, password) VALUES ( ?, ?, ?, ?)",
    [name, email, phone, hashedPassword],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
      res.send("User registered successfully");
    }
  );
});



const JWT_SECRET = "your_jwt_secret"; // Use a secure secret in a real application
// Login route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const query = "SELECT * FROM admin_details WHERE user_name = ?";
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ message: "Internal server error." });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const user = results[0];

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password." });
    }
    // Generate a token
    const token = jwt.sign({ id: user.id, username: user.user_name }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: "Login successful", token });
    //res.json({ message: "Login successful", user: user });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
