const { Aircraft } = require('../models');

exports.getAllAircrafts = async (req, res) => {
    try {
        const aircrafts = await Aircraft.findAll();
        res.json(aircrafts);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving aircrafts', error: err.message });
    }
};

exports.getAircraftById = async (req, res) => {
    const { id } = req.params;
    try {
        const aircraft = await Aircraft.findByPk(id);
        if (!aircraft) return res.status(404).json({ message: 'Aircraft not found' });
        res.json(aircraft);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving aircraft', error: err.message });
    }
};
