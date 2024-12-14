const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Flight', {
        flightId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        flightNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departureAirport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        arrivalAirport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departureTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        arrivalTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'flight',
        timestamps: false,
    });
};
