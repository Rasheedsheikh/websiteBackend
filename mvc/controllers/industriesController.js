
const {industries}= require("../Models/industriesModel")

exports. getIndustries= async(req,res)=>{
    const data= await industries.find()
    res.send(data)
}

exports. postIndustries= async(req,res)=>{
    const data= await industries.create(req.body)
    res.send(data)
}