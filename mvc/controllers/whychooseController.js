
const {whychoose}= require("../Models/whychooseModel")

exports. getChoose= async(req,res)=>{
    const data= await whychoose.find()
    res.send(data)
}

exports. createChoose= async(req,res)=>{
    console.log({body: req.body});
    const data= await whychoose.create(req.body)
    res.send(data)
}
  
