const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Passenger', {
        passengerId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'passenger_id'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'last_name'
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'birth_date'
        },
        passportNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'passport_number'
        },
    }, {
        tableName: 'passenger',
        timestamps: false,
    });
};
