const { BoardingPass } = require('../models');

exports.getAllBoardingPasses = async (req, res) => {
    try {
        const passes = await BoardingPass.findAll();
        res.json(passes);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving boarding passes', error: err.message });
    }
};

exports.getBoardingPassById = async (req, res) => {
    const { id } = req.params;
    try {
        const pass = await BoardingPass.findByPk(id);
        if (!pass) return res.status(404).json({ message: 'Boarding pass not found' });
        res.json(pass);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving boarding pass', error: err.message });
    }
};
