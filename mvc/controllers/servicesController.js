const Services = require("../Models/servicesModel");

exports.getService = async (req, res) => {
    const data = await Services.find(req.body)
    res.send(data)

}

exports.createService = async (req, res) => {
    const data = await Services.create(req.body)
    console.log(req.body)
    res.send(data)

}