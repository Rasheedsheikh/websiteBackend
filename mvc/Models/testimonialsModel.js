const mongoose = require('mongoose');
const testimonials = new mongoose.Schema({



        title: { type: Array, required: false },
        img: { type: Array, required: false },

        slide: [{
            desc: { type: String, required: false },
            name: { type: String, required: false },
            role: { type: String, required: false },
            at: { type: String, required: false },
        }]




})
const Testimonials = mongoose.model("Testimonials", testimonials)