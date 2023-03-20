import { Services } from "../Services/model"
const routes = express.Router();
routes.get("/services", async (req, res) => {
     const data = await Services.find(req.body)
    res.send(data)

})

routes.post("/services", async (req, res) => {
    // const data = await Services.create(req.body)
 console.log(req.body)
    res.send(data)

})

module.exports = routes; 