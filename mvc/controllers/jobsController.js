// app.post("/jobs", async (req, res) => {
//     const data = await Jobs.create(req.body)
//     res.send(data)

// })
// app.get("/jobs", async (req, res) => {
//     const data = await Jobs.find({})
//     res.send(data)

// })

// app.get("/jobs/:id", async (req, res) => {
//     const data = await Jobs.find({ _id: req.params.id })
//     console.log(req)
//     res.send(data)

// })

const mongoose = require('mongoose');
const {jobs}= require("../Models/jobsModel")

exports.getJobs= async(req,res)=>{
    const data = await jobs.find({})
   
    res.send(data)
}

exports. createJobs= async(req,res)=>{
    console.log({body: req.body});
    const data = await jobs.create(req.body)
    res.send(data)
}
  
exports.findJobById = async (req, res) => {
    try {   
        const { id } = req.params;
       
        const details = await jobs.findById(id);
        // const details = job.find(i => i._id == id);
        if (details) {
            res.status(200).json(details);
        } else {
            res.status(404).json({ message: "details not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// title
// "Management - Human Resource Management"
// Experience
// "2 to 5 Years"
// jobtype
// "Full time"
// Location
// "Coimbatore"
// desc
// "Build website architecture and aesthetics with WordPress Ability to cr…"

// desc2
// Array
// Schedule
// "9AM TO 6PM"
// Education

exports. patchJobs= async(req,res)=>{
    const title= req.body.title
    const Experience= req.body.Experience
    const jobtype=req.body.jobtype
    const Location=req.body.Location
    const desc=req.body.desc
    const desc2=req.body.desc2
    const Schedule=req.body.Schedule
    const Education=req.body.Education

    const id=req.params.id
    let queryObj= { _id: mongoose.Types.ObjectId(id)}
    console.log(queryObj)

    let updateObj = {
        $set: {
           "title":title,
            "Experience":Experience,
            "desc":desc,
            "desc2":desc2,
            "jobtype":jobtype,
            "Location":Location,
            "Schedule":Schedule,
            "Education":Education

         
        }
    }
    let item = await jobs.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)
}

