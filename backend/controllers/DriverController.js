const db = require('../models/db');

// POST create a new driver
exports.createDriver = (req, res) => {
  const { emp_No, name, licenseNumber, contactNumber, email } = req.body;
  const sql = 'INSERT INTO driver_details (emp_No, name, licenseNumber, contactNumber, email) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [emp_No, name, licenseNumber, contactNumber, email], (err, result) => {
    if (err) {
      console.error('Error creating driver:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(201).send({ id: result.insertId, emp_No, name, licenseNumber, contactNumber, email });
  });
};

// GET all drivers
exports.getAllDrivers = (req, res) => {
  const sql = 'SELECT * FROM driver_details';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching drivers:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send(results);
  });
};

// PUT update an existing driver
exports.updateDriver = (req, res) => {
  const { id } = req.params;
  const { emp_No, name, licenseNumber, contactNumber, email } = req.body;
  const sql = 'UPDATE driver_details SET emp_No = ?, name = ?, licenseNumber = ?, contactNumber = ?, email = ? WHERE id = ?';
  db.query(sql, [emp_No, name, licenseNumber, contactNumber, email, id], (err, result) => {
    if (err) {
      console.error('Error updating driver:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send({ id, emp_No, ...req.body });
  });
};

// DELETE delete a driver
exports.deleteDriver = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM driver_details WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting driver:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send({ message: 'Driver deleted successfully', id });
  });
};
