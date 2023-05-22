const mongoose = require('mongoose');

const {solutions}= require( "../Models/solutionsModel")
// const Multer = require('multer');
// const {format} = require('util');

// const {Storage} = require('@google-cloud/storage');



exports.getSolutions= async(req,res)=>{
    const data= await solutions.find()
    res.send(data)
}

exports. postSolutions= async(req,res)=>{
    const data= await solutions.create(req.body)
    res.send(data)
}


exports.findSolutionsById = async (req, res) => {
    try {   
        const { id } = req.params;
        const { headingId } = req.params;
        const sol = await solutions.findById(id);
        const heading = sol.heading.find(i => i._id == headingId);
        if (heading) {
            res.status(200).json(heading);
        } else {
            res.status(404).json({ message: "details not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// exports.patchSolutions = async (req, res) => {

//     const title = req.body.title;
//     //    const img = req.body.img;
//     // const heading2 = req.body.heading2;
//     const desc=req.body.desc
//     // const img= req.body.img 
//     const headingId = req.params.id
//     // const id=req.params
   
//     //   console.log(heading1,req,id)
//     console.log(headingId)
// console.log(req.body)

//     let queryObj = { _id: mongoose.Types.ObjectId("646af16005f278fd8044d467"), "heading._id": mongoose.Types.ObjectId(headingId) }
  
//     console.log(queryObj)

//     let updateObj = {
//         $set: {
//             "heading.$.title": title,
//             // "heading.$.heading2": heading2,
//             "heading.$.desc":desc,
//             // "heading.$.img":img
            
//             // "insider.$.button": button
//         }
//     }
//     let item = await solutions.findOneAndUpdate(queryObj, updateObj, { new: true })
//     res.send(item)
//     console.log(item,updateObj)

//     // console.log(req.body)

// }


// const multer = Multer({
//     storage: Multer.memoryStorage(),
//     limits: {
//       fileSize: 100 * 1024 * 1024,
//     },
//   });
  
//   const cloudStorage = new Storage({
//     // keyFilename: `${__dirname}/service_account_key.json`,
//     projectId: "urgent-care-306805",
//   });
//   const bucketName = "urgentcare-forms-demo";
//   const bucket = cloudStorage.bucket(bucketName);
  
//   exports.uploadFileSolution = async (req, res, next) => {
    
//     const Id = req.params.id;
//     // console.log(req.body._id)
//     // var fileBuffer = Buffer.from(req.file, 'base64')
//     // console.log(fileBuffer)
//     // console.log(req.id);
//     // console.log(req.file);
//     // console.log(req.body);
//     console.log(req.params.id)
//     if (!req.file) {
//       res.status(400).send("No file uploaded.");
//       return;
//     }
//     const blob = bucket.file(req.file.originalname);
//     const blobStream = blob.createWriteStream();
//     blobStream.on("error", (err) => {
//       next(err);
//     });
  
//     blobStream.on("finish", (response) => {
//         var publicUrl = format(
//         `https://storage.googleapis.com/${bucket.name}/${blob.name}`
//       );
  
//       res.status(200).send({publicUrl});
//     });   
    
//     blobStream.end(req.file.buffer);
  
//     let queryObj = {
//         _id: mongoose.Types.ObjectId(Id),
   
//       };
  
//       console.log(queryObj);
  
//       let updateObj = {
//         $set: {
//           "Images": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
//         },
//       };
//   console.log(updateObj)
//   try {
//     let item = await solutions.findOneAndUpdate(queryObj, updateObj, { new: true });
//     console.log(item);
//   } catch (error) {
//     console.error(error);
//     // Handle the error appropriately
//   }
//   }
  
  