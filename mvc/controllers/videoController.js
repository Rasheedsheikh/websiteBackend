const mongoose = require('mongoose');
const {video} = require("../Models/videoModel")

exports.getVideo = async (req, res) => {
    const data = await video.find(req.body)
    // console.log({data});
    res.send(data)
}

exports.createVideo = async (req, res) => {
    const data = await video.create(req.body);
    console.log(req.body)
    res.send(data)

}

// exports.findShapesById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { shapesId } = req.params;
//         const service = await services.findById(id);
//         const shapes = service.shapes.find(i => i._id == shapesId);
//         if (shapes) {
//             res.status(200).json(shapes);
//         } else {
//             res.status(404).json({ message: "shapes not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



