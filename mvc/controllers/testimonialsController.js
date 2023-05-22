const {Testimonials}= require("../Models/testimonialsModel")
const mongoose = require('mongoose');
const Multer = require('multer');
const {Storage} = require('@google-cloud/storage');

const {format} = require('util');

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


const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 100 * 1024 * 1024,
    },
  });
  
  const cloudStorage = new Storage({
    // keyFilename: `${__dirname}/service_account_key.json`,
    projectId: "urgent-care-306805",
  });
  const bucketName = "urgentcare-forms-demo";
  const bucket = cloudStorage.bucket(bucketName);
  
  exports.uploadFiletesti = async (req, res, next) => {
    
    const slideId = req.params.slideId;
    // console.log(req.body.slide_id)
    // var fileBuffer = Buffer.from(req.file, 'base64')
    // console.log(fileBuffer)
    // console.log(req.id);
    // console.log(req.file);
    // console.log(req.body);
    console.log(req.params.slideId)
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();
    blobStream.on("error", (err) => {
      next(err);
    });

    blobStream.on("finish", (response) => {
        var publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      );

      res.status(200).send({publicUrl});
    });   
    
    blobStream.end(req.file.buffer);

    let queryObj = {
        _id: mongoose.Types.ObjectId("643cd325d4a66e1e46b71cfa"),
        "slide._id": mongoose.Types.ObjectId(slideId),
      };
  
      console.log(queryObj);
  
      let updateObj = {
        $set: {
          "slide.$.img": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
        },
      };
  console.log(updateObj)
  try {
    let item = await Testimonials.findOneAndUpdate(queryObj, updateObj, { new: true });
    console.log(item);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
}
