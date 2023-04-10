const {Testimonials}= require("../Models/testimonialsModel")

exports.getTestimonials= async(req,res)=>{
    const data= await Testimonials.find()
    console.log({data: req.body})
    res.send(data)
}

exports.postTestimonials= async(req,res)=>{
    const data= await Testimonials.create(req.body)
    console.log(req.body)
    res.send(data)
}
