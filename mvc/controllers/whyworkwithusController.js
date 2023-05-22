const mongoose = require('mongoose');
const {whyworkwithus}= require("../Models/workwithusModel");
const {format} = require('util');
// const mongoose = require('mongoose');
const Multer = require('multer');
const {Storage} = require('@google-cloud/storage');

exports. getWorkwithus= async(req,res)=>{
    const data= await whyworkwithus.find()
    res.send(data)
}

exports. createWorkwithus= async(req,res)=>{
    console.log({body: req.body});
    const data= await whyworkwithus.create(req.body)
    res.send(data)
}
  


exports. patchWhyworkwithus= async(req,res)=>{
    const title2= req.body.title2
    const title1= req.body.title1
    const desc=req.body.desc
    const img=req.body.img

    const id=req.params.id
    let queryObj= { _id: mongoose.Types.ObjectId(id)}
    console.log(queryObj)

    let updateObj = {
        $set: {
           "title1":title1,
            "title2":title2,
            "desc":desc,
            "img":img,
         
        }
    }
    let item = await whyworkwithus.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)
}



// exports.findWhyworkwithusId = async (req, res) => {
//     try {  
//         const { id } = req.params;
//         // const { descId } = req.params;
//         const work = await whyworkwithus.findById(id);
//         const main = work.whyworkwithus.find(i => i._id == id);
//         if (main) {
//             res.status(200).json(main);
//         } else {
//             res.status(404).json({ message: "desc not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


exports. findWhyworkwithusId= async (req, res) => {
    try {
      const result = await whyworkwithus.findById(req.params.id);
      if (!result) {
        return res.status(404).json({ message: 'No Whyworkwithus item found' });
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
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
  
  exports.uploadFilework = async (req, res, next) => {
    
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
        },
      };
  console.log(updateObj)
  try {
    let item = await whyworkwithus.findOneAndUpdate(queryObj, updateObj, { new: true });
    console.log(item);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
}

