const mongoose = require('mongoose');

const industrydeatil = new mongoose.Schema({

    detail: [{
        title: { type: String, required: false },
        img: { type: String, required: false },
        desc: { type: Array, required: false },
    }]
});

exports.industrydeatil = mongoose.model("Industrydeatil", industrydeatil);