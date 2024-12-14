const { Flight } = require('../models');

exports.getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.findAll();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving flights', error: err.message });
    }
};

exports.getFlightById = async (req, res) => {
    const { id } = req.params;
    try {
        const flight = await Flight.findByPk(id);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });
        res.json(flight);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving flight', error: err.message });
    }
};
