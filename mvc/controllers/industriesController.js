const mongoose = require('mongoose');
const Multer = require('multer');
const {Storage} = require('@google-cloud/storage');
const { industries } = require("../Models/industriesModel")

exports.getIndustries = async (req, res) => {
    const data = await industries.find()
    res.send(data)
}

exports.postIndustries = async (req, res) => {
    const data = await industries.create(req.body)
    res.send(data)
}

exports.patchIndustries = async (req, res) => {

    const title = req.body.title;
       const img = req.body.img;
    const desc = req.body.desc;
    const button = req.body.button
    const insiderId = req.params.id
    //   console.log(heading,req,id)
    console.log(insiderId)

    let queryObj = { _id: mongoose.Types.ObjectId("64468f679bb39d6dc38af1fa"), "insider._id": mongoose.Types.ObjectId(insiderId) }

    console.log(queryObj)

    let updateObj = {
        $set: {
            "insider.$.title": title,
            "insider.$.desc": desc,
            "insider.$.button": button,
            "insider.$.img": img
        }
    }
    let item = await industries.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)

}


exports.patchIndustriesimg = async (req, res) => {

    // const title = req.body.title;
       const img = req.body.img;
    // const desc = req.body.desc;
    // const button = req.body.button
    const insiderId = req.params.id
    //   console.log(heading,req,id)
    console.log(insiderId)

    let queryObj = { _id: mongoose.Types.ObjectId("64468f679bb39d6dc38af1fa"), "insider._id": mongoose.Types.ObjectId(insiderId) }

    console.log(queryObj)

    let updateObj = {
        $set: {
            // "insider.$.title": title,
            // "insider.$.desc": desc,
            // "insider.$.button": button,
            "insider.$.img": img
        }
    }
    let item = await industries.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)



}



// delete api

// let queryObj={_id:mongoose.Types.ObjectID("642a7cbf679fb2ca5ec822f0"),"insider._id":mongoose.Types.ObjectID("642a7cbf679fb2ca5ec822f1")}
// let updateObj={$set:{"insider.$.title":""}}
// let item= await industries.findOneAndUpdate(queryObj,updateObj,{new:true})


exports.findInsiderById = async (req, res) => {
    try {  
        const { id } = req.params;
        const { insiderId } = req.params;
        const industry = await industries.findById(id);
        const insider = industry.insider.find(i => i._id == insiderId);
        if (insider) {
            res.status(200).json(insider);
        } else {
            res.status(404).json({ message: "Insider not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteIndustries = async (req, res) => {


    try {
        let x = req.query.mongo_id
        let y = req.query.mongo_objId
        let z = req.query.value ? req.query.value : ""
        // let z= req.query.value ?? "" 
        let queryObj = { _id: mongoose.Types.ObjectId(x), "insider._id": mongoose.Types.ObjectId(y) }
        console.log(queryObj)
        let updateObj = { $set: { "insider.$.title": z } }
        // let item= await industries.findOneAndUpdate(queryObj,updateObj,{new:true})

        res.status(200).send(item)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
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
  
  exports. uploadFile = async (req, res, next) => {
    const insiderId = req.params.id;
    console.log(req.id);
    console.log(req.file);
    console.log(req.body);
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();
    blobStream.on("error", (err) => {
      next(err);
    });
    blobStream.on("finish", () => {
      const publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      );
  
      let queryObj = {
        _id: mongoose.Types.ObjectId("64468f679bb39d6dc38af1fa"),
        "insider._id": mongoose.Types.ObjectId(insiderId),
      };
  
      console.log(queryObj);
  
      let updateObj = {
        $set: {
          "insider.$.img": publicUrl,
        },
      };
  
      let item = industries.findOneAndUpdate(queryObj, updateObj, { new: true });
      res.send(item);
      console.log(item, updateObj);
  
      res.status(200).json({ publicUrl });
    });
    blobStream.end(req.file.buffer);
  };
