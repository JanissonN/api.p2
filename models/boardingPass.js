const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('BoardingPass', {
        boardingPassId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'boarding_pass_id',
        },
        seatNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'seat_number',
        },
        issueTime: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'issue_time',
        },
        passengerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'passenger_id',
        },
        flightId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'flight_id',
        },
    }, {
        tableName: 'boarding_pass',
        timestamps: false,
    });
};
