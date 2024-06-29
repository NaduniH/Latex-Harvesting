const express = require('express');
const router = express.Router();
const HelperController = require('../controllers/HelperController');

// Routes

router.post('/', HelperController.createHelper);
router.get('/', HelperController.getAllHelpers);
router.put('/:id', HelperController.updateHelper);
router.delete('/:id', HelperController.deleteHelper);

module.exports = router;
