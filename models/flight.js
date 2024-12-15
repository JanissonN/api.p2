const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Flight', {
        flightId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'flight_id',
        },
        flightNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'flight_number',
        },
        departureAirport: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'departure_airport',
        },
        arrivalAirport: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'arrival_airport',
        },
        departureTime: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'departure_time',
        },
        arrivalTime: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'arrival_time',
        },
    }, {
        tableName: 'flight',
        timestamps: false,
    });
};
