const bcrypt = require('bcryptjs');
const { SysUser } = require('../models');

const getAllUsers = (req, res) => {
    // Sua lógica para obter todos os usuários
    res.send('Todos os usuários');
    console.log("vitin");
  };
  
  const getUserById = (req, res) => {
    // Sua lógica para obter um usuário por ID
    res.send(`Usuário com ID: ${req.params.id}`);
  };
  
  const createUser = (req, res) => {
    // Sua lógica para criar um novo usuário
    res.send('Usuário criado');
  };
  
  const updateUser = (req, res) => {
    // Sua lógica para atualizar um usuário
    res.send(`Usuário com ID: ${req.params.id} atualizado`);
  };
  
  const deleteUser = (req, res) => {
    // Sua lógica para deletar um usuário
    res.send(`Usuário com ID: ${req.params.id} deletado`);
  };
  
  // Exporte as funções para uso no sysUserRoutes.js
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
