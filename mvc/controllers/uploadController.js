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

const {upload}=require("../Models/uploadModel")

exports.postUpload= async(req,res)=>{
//     try{
//   const data=  await upload.create(req.body)
    
//         console.log(data)
//         res.send(data)
// }
//   catch(err) {
//         console.log(err)
//         err("fill all fields")
//     }
// res.send(data)
// }

    const data = await upload.create(req.body)
    res.send(data)
}

// module.exports = routes;