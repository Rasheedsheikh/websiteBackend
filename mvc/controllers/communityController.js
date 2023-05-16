const mongoose = require('mongoose');
const {community}= require("../Models/communityModel")

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
            
            // "insider.$.button": button
        }
    }
    let item = await community.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)

    // console.log(req.body)

}


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