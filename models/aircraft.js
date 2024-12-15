const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Aircraft', {
        aircraftId: { // Nome do campo no código
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'aircraft_id' // Nome correto da coluna no banco de dados
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'aircraft', // Nome correto da tabela
        timestamps: false,
    });
};

