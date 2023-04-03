const Testimonials= require("../Models/testimonialsModel")

exports.getTestimonials= async(req,res)=>{
    const data= await Testimonials.find(req.body)
    res.send(data)
}

exports.postTestimonials= async(req,res)=>{
    const data= await Testimonials.(req.body)
    res.send(data)
}
