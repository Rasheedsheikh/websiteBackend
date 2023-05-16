const mongoose = require('mongoose');

const {solutions}= require( "../Models/solutionsModel")

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


exports.patchSolutions = async (req, res) => {

    const title = req.body.title;
    //    const img = req.body.img;
    // const heading2 = req.body.heading2;
    const desc=req.body.desc
    // const img= req.body.img 
    const headingId = req.params.id
    // const id=req.params.id
   
    //   console.log(heading1,req,id)
    console.log(headingId)
console.log(req.body)

    let queryObj = { _id: mongoose.Types.ObjectId("64339e29d89a06df4bb53a66"), "heading._id": mongoose.Types.ObjectId(headingId) }
  
    console.log(queryObj)

    let updateObj = {
        $set: {
            "heading.$.title": title,
            // "heading.$.heading2": heading2,
            "heading.$.desc":desc,
            // "heading.$.img":img
            
            // "insider.$.button": button
        }
    }
    let item = await solutions.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)

    // console.log(req.body)

}