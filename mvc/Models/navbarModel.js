const mongoose = require('mongoose');

const navbar= new mongoose.Schema({
    img: { type: Array, required: false },
    navRoutes:{ type: Array, required: false }
})