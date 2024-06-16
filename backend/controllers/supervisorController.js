const db = require("../models/db");

exports.createSupervisor = async (req, res) => {
  const { emp_no, name, root, email, phone } = req.body;

  if (!emp_no || !name || !root || !email || !phone) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO supervisor_details (emp_no, name, root, email, phone) VALUES (?, ?, ?, ?, ?)",
      [emp_no, name, root, email, phone]
    );
    res.status(201).json({ id: result.insertId, emp_no, name, root, email, phone });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllSupervisors = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM supervisor_details");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSupervisor = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM supervisor_details WHERE id = ?", [id]);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSupervisor = async (req, res) => {
  const { id } = req.params;
  const { emp_no, name, root, email, phone } = req.body;

  if (!emp_no || !name || !root || !email || !phone) {
    return res.status(400).send("All fields are required.");
  }

  try {
    await db.execute(
      "UPDATE supervisor_details SET emp_no = ?, name = ?, root = ?, email = ?, phone = ? WHERE id = ?",
      [emp_no, name, root, email, phone, id]
    );
    res.status(200).json({ id, emp_no, name, root, email, phone });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
