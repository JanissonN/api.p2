const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('SysUser', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,  // Usando 'id' como a chave primária
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,  // Corresponde ao campo 'name' da tabela
        },
        login_email: {
            type: DataTypes.STRING,
            allowNull: false,  // Corresponde ao campo 'login_email' da tabela
            unique: true,       // Garantindo que o email seja único
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,  // Corresponde ao campo 'password' da tabela
        },
        user_type: {
            type: DataTypes.ENUM('admin', 'regular'),
            allowNull: false,  // Corresponde ao campo 'user_type' da tabela
        },
    }, {
        tableName: 'sys_user',  // Nome da tabela no banco de dados
        timestamps: false,      // Desativa os campos 'createdAt' e 'updatedAt'
    });
};
