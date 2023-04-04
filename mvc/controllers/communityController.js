
const {community}= require("../Models/communityModel")

exports. getCommunity= async(req,res)=>{
    const data= await community.find(req.body)
    res.send(data)
}

exports. createCommunity= async(req,res)=>{
    console.log({body: req.body});
    const data= await community.create(req.body)
    res.send(data)
}
  
