
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