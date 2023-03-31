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



const Jobs= require("../Models/jobsModel")



exports.postJobs= async (req, res) => {
    const data = await Jobs.create(req.body)
    res.send(data)

}
exports.getJobs= async (req, res) => {
    const data = await Jobs.find(req.body)
    res.send(data)

}

exports.getJobsById=async (req, res) => {
    const data = await Jobs.find({ _id: req.params.id })
    console.log(req)
    res.send(data)

}

exports.searchJobs =async (req, res) => {
    let sear=req.query.searchTxt;
    console.log(sear)
    let space = await Jobs.find({
        title: {
            $regex: `${sear}`,
            $options: 'i',
        },
    })
            // let space = await Jobs.find({title: "Full Stack Developer"})
    console.log({space})
    // console.log('-------------search api-------------'+ JSON.stringify(req.query))

    res.send(space)
    
}