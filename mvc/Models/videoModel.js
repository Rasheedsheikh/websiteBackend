const mongoose= require("mongoose")

const video = new mongoose.Schema({
    vid: { type: String, required: false },
    desc: {type:Array,required:false}
})
exports.video = mongoose.model("Video", video)