const db = require('../models/db');

// POST create a new helper
exports.createHelper = (req, res) => {
  const { emp_No, name, contactNumber, email, nic } = req.body;
  const sql = 'INSERT INTO helper_details (emp_No, name, contactNumber, email, nic) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [emp_No, name, contactNumber, email, nic], (err, result) => {
    if (err) {
      console.error('Error creating helper:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(201).send({ id: result.insertId, emp_No, name, contactNumber, email, nic });
  });
};

// GET all helpers
exports.getAllHelpers = (req, res) => {
  const sql = 'SELECT * FROM helper_details';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching helpers:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send(results);
  });
};

// PUT update an existing helper
exports.updateHelper = (req, res) => {
  const { id } = req.params;
  const { emp_No, name, contactNumber, email, nic } = req.body;
  const sql = 'UPDATE helper_details SET emp_No = ?, name = ?, contactNumber = ?, email = ?, nic = ? WHERE id = ?';
  db.query(sql, [emp_No, name, contactNumber, email, nic, id], (err, result) => {
    if (err) {
      console.error('Error updating helper:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send({ id, emp_No, name, contactNumber, email, nic });
  });
};

// DELETE delete a helper
exports.deleteHelper = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM helper_details WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting helper:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send({ message: 'Helper deleted successfully', id });
  });
};
