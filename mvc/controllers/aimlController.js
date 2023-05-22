const {aiml}= require("../Models/AiModel")
const mongoose = require('mongoose');
// const mongoose = require('mongoose');
const Multer = require('multer');
const {Storage} = require('@google-cloud/storage');
const {format} = require('util');

exports. getaiml= async(req,res)=>{
    const data= await aiml.find( )
    res.send(data)
}

exports. postaiml= async(req,res)=>{
    const data= await aiml.create(req.body)
    res.send(data)
}



exports.findaimlById= async(req,res)=>{
    try {
        const result = await aiml.findById(req.params.id);
        if (!result) {
          return res.status(404).json({ message: 'No Whyworkwithus item found' });
        }
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }



    exports.findgridId= async(req,res)=>{
      
            try {  
                const { id } = req.params;
                const { gridId } = req.params;
                const industry = await aiml.findById(id);
                const grid = industry.grid.find(i => i._id == gridId);
                if (grid) {
                    res.status(200).json(grid);
                } else {
                    res.status(404).json({ message: "grid not found" });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        };

    exports.patchaiml= async(req,res)=>{
        const para2= req.body.para2
        const para1= req.body.para1
        const line1= req.body.line1
        const line2= req.body.line2
        const line3= req.body.line3

        const title=req.body.title
        // const image=req.body.image
     
        // const text= req.body.text
        const id=req.params.id
        let queryObj= { _id: mongoose.Types.ObjectId(id)}
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                "para2":para2,
               "para1":para1,
               "line1":line1,
               "line2":line2,
               "line3":line3,
                "title":title,
                // "image":image,
                // "imgonimg":imgonimg,
                // "text":text
             
            }
        }
        let item = await aiml.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    }
    
    

    exports.patchgrid = async (req, res) => {

        //    const imgtitle = req.body.imgtitle;
       const title=req.body.desctitle
        const img= req.body.img
        // const id=req.body.id
        const gridId = req.params.id
        //  const id=req.params.id
        //   console.log(name,req,id)
        console.log(gridId)
    console.log(req.body)
    
        let queryObj = { _id: mongoose.Types.ObjectId("6434ee0aac41f940a67642f5"), "grid._id": mongoose.Types.ObjectId(gridId) }
    
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                // "sol.$.imgtitle": imgtitle,
                "sol.$.desc": desc,
                "sol.$.desctitle":desctitle,
                "sol.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await aiml.findOneAndUpdate(queryObj, updateObj, { new: true })
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
      
      exports.uploadFilegrid = async (req, res, next) => {
        const id = req.params.id;
        const gridId = req.params.gridId;
        console.log(id)
      
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
      
          res.status(200).send({ publicUrl });
        });
      
        blobStream.end(req.file.buffer);
      
        let queryObj = {
          _id: mongoose.Types.ObjectId(id),
        };
      
        let updateObj = {
          $set: {},
        };
      
        // Update the grid image if gridId is provided
        if (gridId) {
          queryObj["grid._id"] = mongoose.Types.ObjectId(gridId);
          updateObj["$set"]["grid.$.img"] = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        } else {
          // Update the main ID image if gridId is not provided
          updateObj["$set"]["image"] = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        }
      
        try {
          let item = await aiml.findOneAndUpdate(queryObj, updateObj, { new: true });
          console.log(item);
        } catch (error) {
          console.error(error);
          // Handle the error appropriately
        }
      };
      
   
      