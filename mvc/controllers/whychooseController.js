const mongoose = require('mongoose');
const {format} = require('util');
// const mongoose = require('mongoose');
const Multer = require('multer');
const {Storage} = require('@google-cloud/storage');
const {whychoose}= require("../Models/whychooseModel")

exports. getChoose= async(req,res)=>{
    const data= await whychoose.find()
    res.send(data)
}

exports. createChoose= async(req,res)=>{
    console.log({body: req.body});
    const data= await whychoose.create(req.body)
    res.send(data)
}
  


// exports.patchWhychoose = async (req, res) => {

//     const number = req.body.number;
     
//     const detail = req.body.detail;
 
//     const descId = req.params.id
//     //   console.log(number,req)
//     // console.log(descId)
// console.log(req.body)

//     let queryObj = { _id: mongoose.Types.ObjectId("642a6e7ab094df34743e2c1d"), "desc._id": mongoose.Types.ObjectId(descId) }

//     console.log(queryObj)


    
//     let updateObj = {
//         $set: {
//             "desc.$.number": number,
//         // "desc.$.detail": ["xyz",""]
//         "desc.$.detail": detail,
//             // "desc.$.desc.1": desc[1],
//             // "desc.$.desc.2": desc[2]
         
           
//             // "insider.$.button": button
//         }
//     }
//     let item = await whychoose.findOneAndUpdate(queryObj, updateObj, { new: true })
//     res.send(item)
//     console.log(item,updateObj)

//     // console.log(req.body)

// }



exports.patchWhychoose = async (req, res) => {
  try {
    const number = req.body.number;
    const detail = req.body.detail;
    const descId = req.params.id;

    console.log(req.body); // Log the request body to see if the values are being passed correctly

    let queryObj = { _id: mongoose.Types.ObjectId("6451028d758aa6177a972dd6"), "desc._id": mongoose.Types.ObjectId(descId) };
    let updateObj = {
      $set: {
        "desc.$.number": number,
        "desc.$.detail": detail,
      }
    };

    let item = await whychoose.findOneAndUpdate(queryObj, updateObj, { new: true });
    console.log(item, updateObj); // Log the updated item and the update object to see if they are correct
    res.send(item);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}


exports.findWhyChooseById = async (req, res) => {
    try {  
        const { id } = req.params;
        const { descId } = req.params;
        const whychose = await whychoose.findById(id);
        const desc = whychose.desc.find(i => i._id == descId);
        if (desc) {
            res.status(200).json(desc);
        } else {
            res.status(404).json({ message: "desc not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
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

exports.uploadFilechose = async (req, res, next) => {
  
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
  let item = await whychoose.findOneAndUpdate(queryObj, updateObj, { new: true });
  console.log(item);
} catch (error) {
  console.error(error);
  // Handle the error appropriately
}
}

