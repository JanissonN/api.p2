const express = require('express');
const { getAllAircrafts, getAircraftById } = require('../controllers/aircraftController');

const router = express.Router();

router.get('/', getAllAircrafts);
router.get('/:id', getAircraftById);

module.exports = router;
