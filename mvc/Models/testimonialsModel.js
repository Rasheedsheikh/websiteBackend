const mongoose = require('mongoose');
const testimonials = new mongoose.Schema({



        title: { type: Array, required: false },
       

        slide: [{  
            img: { type: String, required: false },
            desc: { type: String, required: false },
            name: { type: String, required: false },
            role: { type: String, required: false }
        }]




})
exports.Testimonials = mongoose.model("Testimonials", testimonials)