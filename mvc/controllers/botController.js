const {bot}= require("../Models/botModel")
// const mongoose = require('mongoose');
const {format} = require('util');
const mongoose = require('mongoose');
const Multer = require('multer');
const {Storage} = require('@google-cloud/storage');
exports. getbot= async(req,res)=>{
    const data= await bot.find( )
    res.send(data)
}

exports. postbot= async(req,res)=>{
    const data= await bot.create(req.body)
    res.send(data)
}



exports.findbotById= async(req,res)=>{
    try {
        const result = await bot.findById(req.params.id);
        if (!result) {
          return res.status(404).json({ message: 'No Whyworkwithus item found' });
        }
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }




    exports.patchbot= async(req,res)=>{
        const para2= req.body.para2
        const para1= req.body.para1
        const title=req.body.title
        const image=req.body.image
        const img=req.body.image
     
        // const text= req.body.text
        const id=req.params.id
        let queryObj= { _id: mongoose.Types.ObjectId(id)}
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                "para2":para2,
               "para1":para1,
                "title":title,
                "image":image,
                "img":img,
                // "text":text
             
            }
        }
        let item = await bot.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
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
    
    exports.uploadFilebot = async (req, res, next) => {
      
      const Id = req.params.id;
      // console.log(req.body._id)
      // var fileBuffer = Buffer.from(req.file, 'base64')
      // console.log(fileBuffer)
      // console.log(req.id);
      // console.log(req.file);
      // console.log(req.body);
      console.log(req.params.id)
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
          _id: mongoose.Types.ObjectId(Id),
     
        };
    
        console.log(queryObj);
    
        let updateObj = {
          $set: {
            "img": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
            "image":`https://storage.googleapis.com/${bucket.name}/${blob.name}`,
          },
        };
    console.log(updateObj)
    try {
      let item = await bot.findOneAndUpdate(queryObj, updateObj, { new: true });
      console.log(item);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  }
  
  