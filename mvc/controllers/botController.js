const {bot}= require("../Models/botModel")
const mongoose = require('mongoose');
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
    
    

      