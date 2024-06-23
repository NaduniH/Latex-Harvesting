const express = require('express');
const router = express.Router();
const DriverController = require('../controllers/DriverController');

// Routes

router.post('/', DriverController.createDriver);
router.get('/', DriverController.getAllDrivers);
router.put('/:id', DriverController.updateDriver);
router.delete('/:id', DriverController.deleteDriver);

module.exports = router;
