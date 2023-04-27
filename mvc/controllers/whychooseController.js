const mongoose = require('mongoose');
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

    let queryObj = { _id: mongoose.Types.ObjectId("6433ab8217e9bf887c39a6cf"), "desc._id": mongoose.Types.ObjectId(descId) };
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
        const industry = await whychoose.findById(id);
        const desc = industry.desc.find(i => i._id == descId);
        if (desc) {
            res.status(200).json(desc);
        } else {
            res.status(404).json({ message: "desc not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};