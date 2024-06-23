const express = require('express');
const router = express.Router();
const RootArrangementController = require('../controllers/RootArrangementController');

router.post('/', RootArrangementController.createArrangement);
router.get('/', RootArrangementController.getAllArrangements);
router.put('/:id', RootArrangementController.updateArrangement);
router.delete('/:id', RootArrangementController.deleteArrangement);

module.exports = router;
