const {mongoose}= require("mongoose");

const Aiml = new mongoose.Schema({
        wall: { type: String, required: false },
        para: { type: Array, required: false }
});

exports.Aiml = mongoose.model("AIML", Aiml);