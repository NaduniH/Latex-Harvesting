const express = require("express");
const router = express.Router();
const supervisorController = require("../controllers/supervisorController");

router.post("/supervisors", supervisorController.createSupervisor);
router.get("/supervisors", supervisorController.getAllSupervisors);
router.delete("/supervisors/:id", supervisorController.deleteSupervisor);
router.put("/supervisors/:id", supervisorController.updateSupervisor);

module.exports = router;
