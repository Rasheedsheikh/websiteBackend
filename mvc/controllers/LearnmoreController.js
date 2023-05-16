const {learn}= require("../Models/learnmoreModel")
const mongoose = require('mongoose');
exports.getlearnmore= async(req,res)=>{
    const data= await learn.find( )
    res.send(data)
}

exports.postlearnmore= async(req,res)=>{
    const data= await learn.create(req.body)
    res.send(data)
}



exports.findlearnmoreById= async(req,res)=>{
    try {
        const result = await learnmore.findById(req.params.id);
        if (!result) {
          return res.status(404).json({ message: 'No Whyworkwithus item found' });
        }
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }



    // exports.findfulId= async(req,res)=>{
      
    //         try {  
    //             const { id } = req.params;
    //             const { fulId } = req.params;
    //             const industry = await learnmore.findById(id);
    //             const ful = industry.ful.find(i => i._id == fulId);
    //             if (ful) {
    //                 res.status(200).json(ful);
    //             } else {
    //                 res.status(404).json({ message: "ful not found" });
    //             }
    //         } catch (error) {
    //             res.status(500).json({ message: error.message });
    //         }
    //     };

        

    // exports.patchlearnmore= async(req,res)=>{
    //     const para2= req.body.para2
    //     const para1= req.body.para1
    //     const title=req.body.title
    //     const image=req.body.image
     
    //     // const text= req.body.text
    //     const id=req.params.id
    //     let queryObj= { _id: mongoose.Types.ObjectId(id)}
    //     console.log(queryObj)
    
    //     let updateObj = {
    //         $set: {
    //             "para2":para2,
    //            "para1":para1,
    //             "title":title,
    //             "image":image,
    //             // "imgonimg":imgonimg,
    //             // "text":text
             
    //         }
    //     }
    //     let item = await learnmore.findOneAndUpdate(queryObj, updateObj, { new: true })
    //     res.send(item)
    //     console.log(item,updateObj)
    // }
    
    

    // exports.patchful = async (req, res) => {

    //     //    const imgtitle = req.body.imgtitle;
    //     const desc = req.body.desc;
    //     const desctitle=req.body.desctitle
    //     const img= req.body.img
    //     // const id=req.body.id
    //     const solId = req.params.id
    //     //  const id=req.params.id
    //     //   console.log(name,req,id)
    //     console.log(solId)
    // console.log(req.body)
    
    //     let queryObj = { _id: mongoose.Types.ObjectId("6434ee0aac41f940a67642f5"), "sol._id": mongoose.Types.ObjectId(solId) }
    
    //     console.log(queryObj)
    
    //     let updateObj = {
    //         $set: {
    //             // "sol.$.imgtitle": imgtitle,
    //             "sol.$.desc": desc,
    //             "sol.$.desctitle":desctitle,
    //             "sol.$.img":img
                
    //             // "insider.$.button": button
    //         }
    //     }
    //     let item = await learnmore.findOneAndUpdate(queryObj, updateObj, { new: true })
    //     res.send(item)
    //     console.log(item,updateObj)
    
    //     // console.log(req.body)
    
    // }
