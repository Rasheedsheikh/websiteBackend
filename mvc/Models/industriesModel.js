const mongoose = require('mongoose');
const industries = new mongoose.Schema({

    heading: { type: Array, required: false },

    insider: [{
        img: { type: String, required: false },
        title: { type: String, required: false },
        desc: { type: String, required: false },
        button: { type: String, required: false }
    }]


})
exports.Industries  = mongoose.model("Industries", industries)