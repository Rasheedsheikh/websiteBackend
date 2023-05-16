const mongoose = require('mongoose');

const learn = new mongoose.Schema({

    life: [{
        title: { type: String, required: false },
        img: { type: String, required: false },
        desc: { type: Array, required: false },
    }],
    Emer: [{
        title: { type: String, required: false },
        img: { type: String, required: false },
        desc: { type: Array, required: false },
    }],
    providers: [{
        title: { type: String, required: false },
        img: { type: String, required: false },
        desc: { type: Array, required: false },
    }],
    Payers: [{
        title: { type: String, required: false },
        img: { type: String, required: false },
        desc: { type: Array, required: false },
    }],

});

exports.learn = mongoose.model("Learn", learn);