const db = require("../models/db");

// Get all estates
exports.getAllEstates = (req, res) => {
  db.execute("SELECT * FROM estate_register", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

// Get estate by LXB number
exports.getEstateByLXBNumber = (req, res) => {
  const { lxb_no } = req.params;
  db.execute(
    "SELECT * FROM estate_register WHERE lxb_no = ?",
    [lxb_no],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (result.length === 0) {
        return res.status(404).json({ message: "Estate not found" });
      }
      res.json(result[0]);
    }
  );
};

// Update estate details
exports.updateEstate = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  db.execute(
    "UPDATE estate_register SET ? WHERE lxb_no = ?",
    [updatedData, id],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ message: "Estate updated successfully" });
    }
  );
};

// Get estates by root
exports.getEstatesByRoot = async (req, res) => {
  const { root } = req.params;
  const query =
    root === "All"
      ? "SELECT * FROM estate_register WHERE lxb_no IS NOT NULL"
      : "SELECT * FROM estate_register WHERE root = ? AND lxb_no IS NOT NULL";
  const params = root === "All" ? [] : [root];
  try {
    const [results] = await db.execute(query, params);
    res.status(200).json({ message: "Successful", results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
