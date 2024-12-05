const express = require('express');
const { issueCertificate } = require('../controllers/certificateController');
const { authenticateToken, isAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateToken, isAdmin, issueCertificate);

module.exports = router;
