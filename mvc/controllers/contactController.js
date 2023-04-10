
const {contact}= require("../Models/contactModel")

exports. getContact= async(req,res)=>{
    const data= await contact.find()
    res.send(data)
}

exports. postContact= async(req,res)=>{
    const data= await contact.create(req.body)
    res.send(data)
}