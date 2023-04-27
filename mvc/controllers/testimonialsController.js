const {Testimonials}= require("../Models/testimonialsModel")

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
        const industry = await Testimonials.findById(id);
        const slide = industry.slide.find(i => i._id == slideId);
        if (slide) {
            res.status(200).json(slide);
        } else {
            res.status(404).json({ message: "slide not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};