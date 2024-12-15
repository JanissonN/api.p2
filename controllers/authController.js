const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SysUser } = require('../models');
const { secret } = require('../config/jwtConfig');

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await SysUser.findOne({ where: { login_email: username } });
        if (!user) return res.status(401).json({ message: 'Invalid username or password' });

        const passwordMatch = user.password === password;
        if (!passwordMatch) return res.status(401).json({ message: 'Invalid username or password' });

        const token = jwt.sign({ userId: user.userId, role: user.role }, secret, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }  
};

module.exports = { login };