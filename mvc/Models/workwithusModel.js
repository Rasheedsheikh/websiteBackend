const mongoose = require('mongoose');
const whyworkwithus = new mongoose.Schema({
        title1: { type: String, required: false },
        title2:{type:String,required:false},
        desc: { type: String, required: false },
        img: { type: String, required: false },
})
exports.whyworkwithus = mongoose.model("Whyworkwithus", whyworkwithus)

