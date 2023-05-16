const {aiml}= require("../Models/AiModel")
const mongoose = require('mongoose');
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
