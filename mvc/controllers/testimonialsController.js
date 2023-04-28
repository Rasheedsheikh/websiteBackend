const {Testimonials}= require("../Models/testimonialsModel")
const mongoose = require('mongoose');

exports.getTestimonials= async(req,res)=>{
    const data= await Testimonials.find()
    // console.log({data: req.body})
    res.send(data)
}

exports.postTestimonials= async(req,res)=>{
    const data= await Testimonials.create(req.body)
    console.log(req.body)
    res.send(data)
}
 

exports.findTestimoById = async (req, res) => {
    try {  
        const { id } = req.params;
        const { slideId } = req.params;
        const Testimo = await Testimonials.findById(id);
        const slide = Testimo.slide.find(i => i._id == slideId);
        if (slide) {
            res.status(200).json(slide);
        } else {
            res.status(404).json({ message: "slide not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.patchTestimonials = async (req, res) => {

    const name = req.body.name;
    //    const img = req.body.img;
    const desc = req.body.desc;
    const role=req.body.role
    const img= req.body.img
    const slideId = req.params.id
    //   console.log(name,req,id)
    console.log(slideId)
console.log(req.body)

    let queryObj = { _id: mongoose.Types.ObjectId("643cd325d4a66e1e46b71cfa"), "slide._id": mongoose.Types.ObjectId(slideId) }

    console.log(queryObj)

    let updateObj = {
        $set: {
            "slide.$.name": name,
            "slide.$.desc": desc,
            "slide.$.role":role,
            "slide.$.img":img
            
            // "insider.$.button": button
        }
    }
    let item = await Testimonials.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)

    // console.log(req.body)

}