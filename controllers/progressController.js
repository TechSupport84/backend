const db = require('../config/db');

exports.updateProgress = (req, res) => {
    const { courseId, progressPercentage } = req.body;
    const query = 'INSERT INTO Progress (userId, courseId, progressPercentage) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE progressPercentage = ?';
    db.query(query, [req.user.id, courseId, progressPercentage, progressPercentage], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ message: 'Progress updated' });
    });
};
