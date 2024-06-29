const express = require('express');
const router = express.Router();
const estateController = require('../controllers/estateController');

router.get('/', estateController.getAllEstates);
router.get('/:lxb_no', estateController.getEstateByLXBNumber);
router.put('/:id', estateController.updateEstate);
router.get('/root/:root', estateController.getEstatesByRoot); // Ensure this route is correctly defined

module.exports = router;
