const Solutions= require( "../Models/solutionsModel")

exports.getSolutions= async(req,res)=>{
    const data= await Solutions.find(req.body)
    res.send(data)
}

exports. postSolutions= async(req,res)=>{
    const data= await Solutions.create(req.body)
    res.send(data)
}
