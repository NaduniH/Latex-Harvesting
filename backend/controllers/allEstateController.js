const db = require("../models/db");

exports.getEstateRegister = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, full_name, email, land_owner_name, location, land_r_no, land_r_copy, user_id, user_id_front, user_id_back, owner_trance_letter, lxb_no, user_name, password, status, estate_name, root  FROM estate_register  WHERE status IS NULL"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update allEstate details
exports.updateAllEstate = async (req, res) => {
  const { id } = req.params;
  const { lxb_no, estate_name, root } = req.body;
  try {
    await db.execute(
      "UPDATE estate_register SET lxb_no = ?, estate_name = ?,  root = ?, status = 1  WHERE id = ?",
      [lxb_no, estate_name, root, id]
    );
    res.json({ message: "Estate updated successfully" });
  } catch (error) {
    return res.status(500).send(err);
  }

  // db.execute(
  //   "UPDATE estate_register SET ? WHERE id = ?",
  //   [updatedData, id],
  //   (err, result) => {
  //     if (err) {
  //       return res.status(500).send(err);
  //     }
  //     res.json({ message: "Estate updated successfully" });
  //   }
  // );
};
