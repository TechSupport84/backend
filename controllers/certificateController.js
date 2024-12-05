const db = require('../config/db');

exports.issueCertificate = (req, res) => {
    const { courseId } = req.body;
    const query = 'INSERT INTO Certificates (userId, courseId) VALUES (?, ?)';
    db.query(query, [req.user.id, courseId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Certificate issued successfully' });
    });
};
