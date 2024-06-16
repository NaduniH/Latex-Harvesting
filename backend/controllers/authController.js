const db = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "@45SdghY";

exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !phone || !password) {
    return res.status(400).send("All fields are required.");
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const [result] = await db.execute(
      "INSERT INTO admin_details (name, email, phone, password) VALUES (?, ?, ?, ?)",
      [name, email, phone, hashedPassword]
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Email:", email, "Password:", password);

  if (!email || !password) {
    console.log("Email and password are required.");
    return res.status(400).json({ message: "email and password requied" });
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
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const user = results[0];
    console.log("User found:", user);

    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log("Password match:", passwordMatch);

    if (!passwordMatch) {
      console.log("Invalid email or password.");
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Token generated:", token);

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error during login process:", err);
    res.status(500).send("Server error during login process");
  }
};

exports.checkEmailExists = async (req, res) => {
  const { email } = req.query;
  try {
    const [rows] = await db.execute(
      "SELECT * FROM admin_details WHERE email = ?",
      [email]
    );
    if (rows.length > 0) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
