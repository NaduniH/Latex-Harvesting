const db = require("../models/db");

exports.createSupervisor = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const [result] = await db.execute(
      "INSERT INTO supervisor_details (name, email, phone, password) VALUES (?, ?, ?, ?)",
      [name, email, phone, password]
    );
    res.status(201).json({ id: result.insertId, name, email, phone, password });
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
  const { name, email, phone, password } = req.body;
  try {
    await db.execute(
      "UPDATE supervisor_details SET name = ?, email = ?, phone = ?, password = ? WHERE id = ?",
      [name, email, phone, password, id]
    );
    res.status(200).json({ id, name, email, phone, password });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
