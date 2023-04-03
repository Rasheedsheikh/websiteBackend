
const Community= require("../Models/communityModel")

exports. getCommunity= async(req,res)=>{
    const data= await Community.find(req.body)
    res.send(data)
}

exports. createCommunity= async(req,res)=>{
    const data= await Community.create(req.body)
    res.send(data)
}
  
