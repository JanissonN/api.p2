const { Passenger } = require('../models');

exports.getAllPassengers = async (req, res) => {
    try {
        const passengers = await Passenger.findAll();
        res.json(passengers);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving passengers', error: err.message });
    }
};

exports.getPassengerById = async (req, res) => {
    const { id } = req.params;
    try {
        const passenger = await Passenger.findByPk(id);
        if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
        res.json(passenger);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving passenger', error: err.message });
    }
};
