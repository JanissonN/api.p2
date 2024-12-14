const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Aircraft', {
        aircraftId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
        tableName: 'aircraft',
        timestamps: false,
    });
};
