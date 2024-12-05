const express = require('express');
const { purchaseCourse } = require('../controllers/purchaseController');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateToken, purchaseCourse);

module.exports = router;
