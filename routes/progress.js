const express = require('express');
const { updateProgress } = require('../controllers/progressController');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateToken, updateProgress);

module.exports = router;
