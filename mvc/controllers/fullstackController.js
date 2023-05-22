const {fullStack}= require("../Models/fullStackModel")
const mongoose = require('mongoose');

const Multer = require('multer');
const {format} = require('util');

const {Storage} = require('@google-cloud/storage');

exports. getfullStack= async(req,res)=>{
    const data= await fullStack.find( )
    res.send(data)
}

exports. postfullStack= async(req,res)=>{
    const data= await fullStack.create(req.body)
    res.send(data)
}



exports.findfullStackById= async(req,res)=>{
    try {
        const result = await fullStack.findById(req.params.id);
        if (!result) {
          return res.status(404).json({ message: 'No Whyworkwithus item found' });
        }
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }



    exports.findfulId= async(req,res)=>{
      
            try {  
                const { id } = req.params;
                const { fulId } = req.params;
                const industry = await fullStack.findById(id);
                const ful = industry.ful.find(i => i._id == fulId);
                if (ful) {
                    res.status(200).json(ful);
                } else {
                    res.status(404).json({ message: "ful not found" });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        };



    exports.patchfullStack= async(req,res)=>{
        const para2= req.body.para2
        const para1= req.body.para1
        const title=req.body.title
        const image=req.body.image
     
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
                // "imgonimg":imgonimg,
                // "text":text
             
            }
        }
        let item = await fullStack.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    }
    
    

    exports.patchful = async (req, res) => {

        //    const imgtitle = req.body.imgtitle;
        const desc = req.body.desc;
        const desctitle=req.body.desctitle
        const img= req.body.img
        // const id=req.body.id
        const solId = req.params.id
        //  const id=req.params.id
        //   console.log(name,req,id)
        console.log(solId)
    console.log(req.body)
    
        let queryObj = { _id: mongoose.Types.ObjectId("6434ee0aac41f940a67642f5"), "sol._id": mongoose.Types.ObjectId(solId) }
    
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
        let item = await fullStack.findOneAndUpdate(queryObj, updateObj, { new: true })
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
      
      exports.uploadFileful = async (req, res, next) => {
        
        const fulId = req.params.fulId;
        // confule.log(req.body.ful_id)
        // var fileBuffer = Buffer.from(req.file, 'base64')
        // confule.log(fileBuffer)
        // confule.log(req.id);
        // confule.log(req.file);
        // confule.log(req.body);
        console.log(req.params.fulId)
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
            _id: mongoose.Types.ObjectId(""),
            "ful._id": mongoose.Types.ObjectId(fulId),
          };
      
          confule.log(queryObj);
      
          let updateObj = {
            $set: {
              "ful.$.img": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
            },
          };
      confule.log(updateObj)
      try {
        let item = await fulutionSalesforce.findOneAndUpdate(queryObj, updateObj, { new: true });
        confule.log(item);
      } catch (error) {
        console.error(error);
        // Handle the error appropriately
      }
    }
    