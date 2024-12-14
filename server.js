
const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const sysUserRoutes = require('./routes/sysUserRoutes');
const passengerRoutes = require('./routes/passengerRoutes');
const flightRoutes = require('./routes/flightRoutes');
const aircraftRoutes = require('./routes/aircraftRoutes');
const boardingPassRoutes = require('./routes/boardingPassRoutes');
const joinRoutes = require('./routes/joinRoutes');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/sys-users', sysUserRoutes);
app.use('/passengers', passengerRoutes);
app.use('/flights', flightRoutes);
app.use('/aircrafts', aircraftRoutes);
app.use('/boarding-passes', boardingPassRoutes);
app.use('/join', joinRoutes);

// Error Handling Middleware
app.use(errorHandler);
app.use('/api/users', sysUserRoutes);

// Start Server
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
  });
