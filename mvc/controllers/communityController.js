const mongoose = require('mongoose');
const {community}= require("../Models/communityModel")
const Multer = require('multer');
const {Storage} = require('@google-cloud/storage');
const {format} = require('util');

exports. getCommunity= async(req,res)=>{
    const data= await community.find()
    res.send(data)
}

exports. createCommunity= async(req,res)=>{
    console.log({body: req.body});
    const data= await community.create(req.body)
    res.send(data)
}
  
exports.findCommunityById = async (req, res) => {
    try {   
        const { id } = req.params;
        const { detailsId } = req.params;
        const communiti = await community.findById(id);
        const details = communiti.details.find(i => i._id == detailsId);
        if (details) {
            res.status(200).json(details);
        } else {
            res.status(404).json({ message: "details not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.patchCommunity = async (req, res) => {

    const heading1 = req.body.heading1;
    //    const img = req.body.img;
    const heading2 = req.body.heading2;
    const desc=req.body.desc
    // const img= req.body.img 
    const detailsId = req.params.id
   
    //   console.log(heading1,req,id)
    console.log(detailsId)
    console.log(req.body)

    let queryObj = { _id: mongoose.Types.ObjectId("643d1ca9d4a66e1e46b71d0b"), "details._id": mongoose.Types.ObjectId(detailsId) }
  
    console.log(queryObj)

    let updateObj = {
        $set: {
            "details.$.heading1": heading1,
            "details.$.heading2": heading2,
            "details.$.desc":desc,
            // "details.$.img":img
            
            // "details.$.button": button
        }
    }
    let item = await community.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)

    // console.log(req.body)

}
// exports.patchCommunityimages = async (req, res) => {
    
//        const images = req.body.images;
   
//     //   console.log(heading1,req,id)
//     console.log(detailsId)
//     console.log(req.body)

//     let queryObj = { _id: mongoose.Types.ObjectId("643d1ca9d4a66e1e46b71d0b"), "details._id": mongoose.Types.ObjectId(detailsId) }
  
//     console.log(queryObj)

//     let updateObj = {
//         $set: {
           
//             "details.$.images.0":images[0],
//             "details.$.images.1":images[1],
//             "details.$.images.2":images[2],
//             "details.$.images.3":images[3]

            
//             // "insider.$.button": button
//         }
//     }
//     let item = await community.findOneAndUpdate(queryObj, updateObj, { new: true })
//     res.send(item)
//     console.log(item,updateObj)

//     // console.log(req.body)

// }


exports. patchMainCommunity= async(req,res)=>{
    const IMG= req.body.IMG
    const title= req.body.title
    const images=req.body.images
    const id=req.params.id
    let queryObj= { _id: mongoose.Types.ObjectId(id)}
    console.log(queryObj)

    let updateObj = {
        $set: {
           "title":title,
            "IMG":IMG,
            // "details.$.img":img
            
          "images":images
        }
    }
    let item = await community.findOneAndUpdate(queryObj, updateObj, { new: true })
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
  
  exports.uploadFileCommu = async (req, res, next) => {
    
    const Id = req.params.id;
    // const id=req.params
    // console.log(req.body.details_id)
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
        
      }
   
  
      console.log(queryObj);
  
      let updateObj = {
        $set: {
            "IMG":`https://storage.googleapis.com/${bucket.name}/${blob.name}`,
          "images[0]": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
          "images[1]": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
          "images[2]": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
          "images[3]": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
        },
      };
    //   let updateObj2={
    //     $set:{
    //         "IMG": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
    //     },
    //   }
  console.log(updateObj)
  try {
    let item = await community.findOneAndUpdate(queryObj, updateObj,  { new: true });
    console.log(item);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
}
