const { sequelize } = require('../models');

exports.getJoinedData = async (req, res) => {
    try {
        const result = await sequelize.query(
            `SELECT 
                bp.boarding_pass_id, bp.seat_number, bp.issue_time, 
                p.first_name AS passenger_first_name, p.last_name AS passenger_last_name, 
                f.flight_number, f.departure_airport, f.arrival_airport, 
                a.model AS aircraft_model
             FROM 
                boarding_pass bp
             JOIN passenger p ON bp.passenger_id = p.passenger_id
             JOIN flight f ON bp.flight_id = f.flight_id
             JOIN aircraft a ON f.aircraft_id = a.aircraft_id
             ORDER BY bp.boarding_pass_id;`,
            { type: sequelize.QueryTypes.SELECT }
        );
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: 'Error executing query', error: err.message });
    }
};
