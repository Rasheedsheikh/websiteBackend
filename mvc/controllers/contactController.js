
const Contact= require("../Models/contactModel")

exports. getContact= async(req,res)=>{
    const data= await Contact.find(req.body)
    res.send(data)
}

exports. postContact= async(req,res)=>{
    const data= await Contact.create(req.body)
    res.send(data)
}