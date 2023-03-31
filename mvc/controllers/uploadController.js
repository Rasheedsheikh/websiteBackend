// app.post("/upload", async (req, res) => {
//     Upload.create(req.body)
//         .then((data) => {
//             console.log(data)
//             res.send(data)
//         })
//         .catch((err) => {
//             console.log(err)
//             err("fill all fields")
//         })
//     res.send(data)

// })


// import {Upload} from "../Models/uploadModel"

const Upload=require("../Models/uploadModel")

exports.postUpload= async(req,res)=>{
    Upload.create(req.body)
    .then((data) => {
        console.log(data)
        res.send(data)
    })
    .catch((err) => {
        console.log(err)
        err("fill all fields")
    })
res.send(data)
}

// module.exports = routes;