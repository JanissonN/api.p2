const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Passenger', {
        passengerId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        passportNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'passenger',
        timestamps: false,
    });
};
