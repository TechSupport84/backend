const db = require('../config/db');

exports.purchaseCourse = (req, res) => {
    const { courseId } = req.body;
    const query = 'INSERT INTO Purchases (userId, courseId) VALUES (?, ?)';
    db.query(query, [req.user.id, courseId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Course purchased successfully' });
    });
};
