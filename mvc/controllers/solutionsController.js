const {solutions}= require( "../Models/solutionsModel")

exports.getSolutions= async(req,res)=>{
    const data= await solutions.find(req.body)
    res.send(data)
}

exports. postSolutions= async(req,res)=>{
    const data= await solutions.create(req.body)
    res.send(data)
}
