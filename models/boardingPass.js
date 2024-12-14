const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('BoardingPass', {
        boardingPassId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        seatNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        issueTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        passengerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        flightId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'boarding_pass',
        timestamps: false,
    });
};
