// routes/allEstateRoutes.js
const express = require("express");
const router = express.Router();
const allEstateController = require("../controllers/allEstateController");

router.get("/estate/estate-register", allEstateController.getEstateRegister);
router.put("/estate/update/:id", allEstateController.updateAllEstate);

module.exports = router;
