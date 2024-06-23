const db = require('../models/db');

exports.createArrangement = (req, res) => {
  const { date, route, vehicleNo, supervisor, driver, helper, nightDriver, nightHelper } = req.body;
  const sql = 'INSERT INTO route_arrangement (date, route, vehicleNo, supervisor, driver, helper, nightDriver, nightHelper) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [date, route, vehicleNo, supervisor, driver, helper, nightDriver, nightHelper], (err, result) => {
    if (err) {
      console.error('Error inserting arrangement:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(201).send({ id: result.insertId, ...req.body });
  });
};

exports.getAllArrangements = (req, res) => {
  const sql = 'SELECT id, DATE_FORMAT(date, "%Y-%m-%d") AS date, route, vehicleNo, supervisor, driver, helper, nightDriver, nightHelper FROM route_arrangement';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching arrangements:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send(results);
  });
};

exports.updateArrangement = (req, res) => {
  const { id } = req.params;
  const { date, route, vehicleNo, supervisor, driver, helper, nightDriver, nightHelper } = req.body;
  const sql = 'UPDATE route_arrangement SET date = ?, route = ?, vehicleNo = ?, supervisor = ?, driver = ?, helper = ?, nightDriver = ?, nightHelper = ? WHERE id = ?';
  db.query(sql, [date, route, vehicleNo, supervisor, driver, helper, nightDriver, nightHelper, id], (err, result) => {
    if (err) {
      console.error('Error updating arrangement:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send({ id, ...req.body });
  });
};

exports.deleteArrangement = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM route_arrangement WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting arrangement:', err);
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send({ message: 'Arrangement deleted successfully', id });
  });
};

