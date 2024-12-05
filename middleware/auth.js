const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    const tokenWithoutBearer = token.split(' ')[1];
    if (!tokenWithoutBearer) return res.status(401).json({ message: 'Invalid token format' });

    try {
        const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access forbidden' });
    next();
};

module.exports = { authenticateToken, isAdmin };
