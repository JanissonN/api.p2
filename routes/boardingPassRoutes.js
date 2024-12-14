const express = require('express');
const { getAllBoardingPasses, getBoardingPassById } = require('../controllers/boardingPassController');

const router = express.Router();

router.get('/', getAllBoardingPasses);
router.get('/:id', getBoardingPassById);

module.exports = router;

