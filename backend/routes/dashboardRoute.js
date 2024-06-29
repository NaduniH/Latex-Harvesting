const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/dashboard/details", dashboardController.getAllDashboardDetails);

module.exports = router;