const express = require('express');
const { getJoinedData } = require('../controllers/joinController');

const router = express.Router();

router.get('/', getJoinedData);

module.exports = router;
