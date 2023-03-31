const Testimonials= require("../Models/testimonialsModel")

exports.getSlutions= async(req,res)=>{
    const data= await Testimonials.find(req.body)
    res.send(data)
}

exports.postSolutions= async(req,res)=>{
    const data= await Testimonials.create(req.body)
    res.send(data)
}
