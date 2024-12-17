const { SysUser } = require('../models');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await SysUser.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

exports.createUser = async (req, res) => {
    const { name, login_email, password, user_type} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await SysUser.create({ name, login_email, password: hashedPassword, user_type });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, role } = req.body;
    try {
        const user = await SysUser.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }
        if (username) user.username = username;
        if (role) user.role = role;

        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await SysUser.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
};

