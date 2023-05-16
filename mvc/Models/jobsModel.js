const mongoose = require('mongoose');
const jobs = new mongoose.Schema({
    email: { type: String, required: false },
    title: { type: String, required: false },
    Experience: { type: String, required: false },
    jobtype: { type: String, required: false },
    Location: { type: String, required: false },
    desc: { type: String, required: false },
    desc2: { type: Array, required: false },
    jobunction: { type: String, required: false },
    Schedule: { type: String, required: false },
    Education: { type: String, required: false },

})
exports.jobs= mongoose.model("Jobs", jobs)

// exports.services = mongoose.model("Services", services);