const mongoose = require('mongoose');
const upload = new mongoose.Schema({

    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true },
    MobileNumber: { type: String, required: true },
    ExperienceInYears: { type: String, required: true },
    EducationQualification: { type: String, required: true },
    Resume: { type: String, required: true },
    jobID: { type: String, required: true }

})

exports.upload = mongoose.model("Upload", upload)