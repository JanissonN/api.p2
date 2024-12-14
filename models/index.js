// models/index.js
const { Sequelize } = require('sequelize');
const dbConfig = require('../config/dbConfig');

// Usando a configuração importada de dbConfig
const sequelize = new Sequelize(dbConfig);

const SysUser = require('./sysUser')(sequelize);
const Passenger = require('./passenger')(sequelize);
const Flight = require('./flight')(sequelize);
const Aircraft = require('./aircraft')(sequelize);
const BoardingPass = require('./boardingPass')(sequelize);

module.exports = {
    sequelize,
    Sequelize,
    SysUser,
    Passenger,
    Flight,
    Aircraft,
    BoardingPass,
};
