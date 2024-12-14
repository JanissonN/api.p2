const express = require('express');
const { getAllPassengers, getPassengerById } = require('../controllers/passengerController');

const router = express.Router();

router.get('/', getAllPassengers);
router.get('/:id', getPassengerById);

module.exports = router;
