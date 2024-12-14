const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwtConfig');

const verifyToken =  (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
        req.user = decoded; // Decoded payload
        next();
    });
};

module.exports = { verifyToken };