const db = require("../models/db");

exports.getAllDashboardDetails = async (req, res) => {
  try {
    const [result] = await db.execute(
      "SELECT root AS Root, " +
        "COUNT(*) AS Customer " +
        "FROM estate_register " +
        "WHERE root IS NOT NULL " +
        "GROUP BY root " +
        "UNION ALL " +
        "SELECT 'Total' AS Root, COUNT(*) AS Customer " +
        "FROM estate_register " +
        "WHERE root IS NOT NULL"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
