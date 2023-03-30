const express = require('express');
const routes = express.Router();


const uploadController = require('../controllers/uploadController');
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

routes.get('/upload', uploadController.getAll);


module.exports = routes; 