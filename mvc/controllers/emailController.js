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

const {email}= require("../Models/emailModel")


exports. postMail= async(req,res)=>{
    email.create(req.body)
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