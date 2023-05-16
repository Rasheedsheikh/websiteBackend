const mongoose = require('mongoose');
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
