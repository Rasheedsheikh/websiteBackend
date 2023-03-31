
const Industries= require("../Models/industriesModel")

exports. getIndustries= async(req,res)=>{
    const data= await Industries.find(req.body)
    res.send(data)
}

exports. postIndustries= async(req,res)=>{
    const data= await Industries.create(req.body)
    res.send(data)
}