const {solutionfullstack}= require("../Models/solutionfullstackModel")

exports. getfullstack= async(req,res)=>{
    const data= await solutionfullstack.find()
    res.send(data)
}

exports. postfullstack= async(req,res)=>{
    const data= await solutionfullstack.create(req.body)
    res.send(data)
}