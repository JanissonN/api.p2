
const express = require('express');
const  {verifyToken} = require('../middleware/authMiddleware');
const {
    getAllUsers,
    
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/sysUserController');  // Verifique o caminho aqui

const router = express.Router();

router.get('/', verifyToken, getAllUsers);

router.post('/', verifyToken, createUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
module.exports = router;
console.log(getAllUsers);  // Verifique se a função está sendo importada corretamente
