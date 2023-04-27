const mongoose = require('mongoose');
const { services } = require("../Models/servicesModel")

exports.getService = async (req, res) => {
    const data = await services.find(req.body)
    // console.log({data});
    res.send(data)
}

exports.createService = async (req, res) => {
    const data = await services.create(req.body);
    console.log(req.body)
    res.send(data)

}
exports.findShapesById = async (req, res) => {
    try {
        const { id } = req.params;
        const { shapesId } = req.params;
        const service = await services.findById(id);
        const shapes = service.shapes.find(i => i._id == shapesId);
        if (shapes) {
            res.status(200).json(shapes);
        } else {
            res.status(404).json({ message: "shapes not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findWhatById = async (req, res) => {
    try {
        const { id } = req.params;
        const { whatId } = req.params;
        const service = await services.findById(id);
        const what = service.what.find(i => i._id == whatId);
        if (what) {
            res.status(200).json(what);
        } else {
            res.status(404).json({ message: "what not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.patchServices = async (req, res) => {

    const heading = req.body.heading;
    //    const img = req.body.img;
    const desc = req.body.desc;
 
    const shapesId = req.params.id
      console.log(heading,req)
    console.log(shapesId)
console.log(req.body)

    let queryObj = { _id: mongoose.Types.ObjectId("642a6e7ab094df34743e2c1d"), "shapes._id": mongoose.Types.ObjectId(shapesId) }

    console.log(queryObj)


    const index = 0;
    let updateObj = {
        $set: {
            "shapes.$.heading": heading,
        // "shapes.$.desc": ["xyz",""]
        "shapes.$.desc.0": desc[0],
            "shapes.$.desc.1": desc[1],
            "shapes.$.desc.2": desc[2]
         
           
            // "insider.$.button": button
        }
    }
    let item = await services.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)

    // console.log(req.body)

}

exports.patchServicesMain = async (req, res) => {

    const title = req.body.title;
    //    const img = req.body.img;
    const desc = req.body.desc;
    
    const whatId = req.params.id
    //   console.log(title,req,id)
    console.log(whatId)
console.log(req.body)

    let queryObj = { _id: mongoose.Types.ObjectId("642a6e7ab094df34743e2c1d"), "what._id": mongoose.Types.ObjectId(whatId) }

    console.log(queryObj)

    let updateObj = {
        $set: {
            "what.$.title": title,
            "what.$.desc": desc,
            
            // "insider.$.button": button
        }
    }
    let item = await services.findOneAndUpdate(queryObj, updateObj, { new: true })
    res.send(item)
    console.log(item,updateObj)

    // console.log(req.body)

}