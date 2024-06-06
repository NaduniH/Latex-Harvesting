const db = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_jwt_secret";


exports.register = (req, res) => {
  const { name, email, phone, password } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !phone || !password) {
    return res.status(400).send("All fields are required.");
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Insert the new user into the database
  db.query(
    "INSERT INTO admin_details (name, email, phone, password) VALUES (?, ?, ?, ?)",
    [name, email, phone, hashedPassword],
    (err, result) => {
      if (err) {
        console.error("Error inserting user into database:", err);
        return res.status(500).send("Server error");
      }
      console.log("User registered successfully:", result);
      res.status(201).send("User registered successfully");
    }
  );
};
;

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Email:", email, "Password:", password);

  if (!email || !password) {
    console.log("Email and password are required.");
    return res.status(400).json({message:"email and password requied"});
  }

  const query = "SELECT * FROM admin_details WHERE email = ?";
  console.log("Executing query:", query, "with email:", email);

  try {
    const connection = await db.getConnection();
    const [results] = await connection.execute(query, [email]);
    console.log("Inside db.query callback");
    console.log("Query executed successfully.");
    console.log("Query results:", results);

    if (results.length === 0) {
      console.log("Invalid email or password.");
      return res.status(401).json({message:"Invalid email or password."});
    }

    const user = results[0];
    console.log("User found:", user);

    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log("Password match:", passwordMatch);

    if (!passwordMatch) {
      console.log("Invalid email or password.");
      return res.status(401).json({message:"Invalid email or password."});
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("Token generated:", token);

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error during login process:", err);
    res.status(500).send("Server error during login process");
  }
};

