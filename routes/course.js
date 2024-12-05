const express = require('express');
const { getCourses, addCourse } = require('../controllers/courseController');
const { authenticateToken, isAdmin } = require('../middleware/auth');
const router = express.Router();

router.get('/', getCourses);
router.post('/', authenticateToken, isAdmin, addCourse);

module.exports = router;
