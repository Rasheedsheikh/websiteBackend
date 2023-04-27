const mongoose = require('mongoose');
const adminUser = new mongoose.Schema({

    Email: {type: String,required: true, unique: true},
    Password: { type: String, required: true }
})

exports.adminUser = mongoose.model("AdminUser", adminUser)