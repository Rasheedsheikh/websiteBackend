const {solutionSalesforce}= require("../Models/solutionSalesforceModel")
const mongoose = require('mongoose');
// const mongoose = require('mongoose');
const Multer = require('multer');
const {format} = require('util');

const {Storage} = require('@google-cloud/storage');


exports. getSalesforce= async(req,res)=>{
    const data= await solutionSalesforce.find( )
    res.send(data)
}

exports. postSalesforce= async(req,res)=>{
    const data= await solutionSalesforce.create(req.body)
    res.send(data)
}



exports.findsalesforceById= async(req,res)=>{
    try {
        const result = await solutionSalesforce.findById(req.params.id);
        if (!result) {
          return res.status(404).json({ message: 'No Whyworkwithus item found' });
        }
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }



    exports.findSolsalesforceById= async(req,res)=>{
      
            try {  
                const { id } = req.params;
                const { solId } = req.params;
                const industry = await solutionSalesforce.findById(id);
                const sol = industry.sol.find(i => i._id == solId);
                if (sol) {
                    res.status(200).json(sol);
                } else {
                    res.status(404).json({ message: "sol not found" });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        };

    exports.patchsalesforce= async(req,res)=>{
        const para2= req.body.para2
        const para1= req.body.para1
        const title=req.body.title
        const img=req.body.img
        const imgonimg=req.body.imgonimg
        const text= req.body.text
        const id=req.params.id
        let queryObj= { _id: mongoose.Types.ObjectId(id)}
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                "para2":para2,
               "para1":para1,
                "title":title,
                "img":img,
                "imgonimg":imgonimg,
                "text":text
             
            }
        }
        let item = await solutionSalesforce.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    }
    
    

    exports.patchSolsalesforce = async (req, res) => {

           const imgtitle = req.body.imgtitle;
        const desc = req.body.desc;
        const desctitle=req.body.desctitle
        const img= req.body.img
        // const id=req.body.id
        const solId = req.params.id
        //  const id=req.params.id
        //   console.log(name,req,id)
        console.log(solId)
    console.log(req.body)
    
        let queryObj = { _id: mongoose.Types.ObjectId("6461b59ab8053833a9620012"), "sol._id": mongoose.Types.ObjectId(solId) }
    
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                "sol.$.imgtitle": imgtitle,
                "sol.$.desc": desc,
                "sol.$.desctitle":desctitle,
                "sol.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await solutionSalesforce.findOneAndUpdate(queryObj, updateObj, { new: true })
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
      
      exports.uploadFileSol = async (req, res, next) => {
        
        const solId = req.params.solId;
        // console.log(req.body.sol_id)
        // var fileBuffer = Buffer.from(req.file, 'base64')
        // console.log(fileBuffer)
        // console.log(req.id);
        // console.log(req.file);
        // console.log(req.body);
        console.log(req.params.solId)
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
            _id: mongoose.Types.ObjectId("6461b59ab8053833a9620012"),
            "sol._id": mongoose.Types.ObjectId(solId),
          };
      
          console.log(queryObj);
      
          let updateObj = {
            $set: {
              "sol.$.img": `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
            },
          };
      console.log(updateObj)
      try {
        let item = await solutionSalesforce.findOneAndUpdate(queryObj, updateObj, { new: true });
        console.log(item);
      } catch (error) {
        console.error(error);
        // Handle the error appropriately
      }
    }
    