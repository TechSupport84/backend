const db = require('../config/db');

exports.getCourses = (req, res) => {
    const query = 'SELECT * FROM Courses';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.addCourse = (req, res) => {
    const { title, description, level, content, price } = req.body;
    const query = 'INSERT INTO Courses (title, description, level, content, price) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [title, description, level, content, price], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Course added successfully' });
    });
};
