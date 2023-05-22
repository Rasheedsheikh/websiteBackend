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
        const result = await learn.findById(req.params.id);
        if (!result) {
          return res.status(404).json({ message: 'No Whyworkwithus item found' });
        }
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }



    exports.findlifeId= async(req,res)=>{
      
            try {  
                const { id } = req.params;
                const { lifeId } = req.params;
                const industry = await learn.findById(id);
                const life = industry.life.find(i => i._id == lifeId);
                if (life) {
                    res.status(200).json(life);
                } else {
                    res.status(404).json({ message: "life not found" });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        };
        exports.findEmerId= async(req,res)=>{
      
            try {  
                const { id } = req.params;
                const { EmerId } = req.params;
                const industry = await learn.findById(id);
                const Emer = industry.Emer.find(i => i._id == EmerId);
                if (Emer) {
                    res.status(200).json(Emer);
                } else {
                    res.status(404).json({ message: "Emer not found" });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        };
        exports.findproviderId= async(req,res)=>{
      
            try {  
                const { id } = req.params;
                const { providersId } = req.params;
                const industry = await learn.findById(id);
                const providers = industry.provider.find(i => i._id == providersId);
                if (providers) {
                    res.status(200).json(provider);
                } else {
                    res.status(404).json({ message: "providers not found" });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        };


        exports.findPayerId= async(req,res)=>{
      
            try {  
                const { id } = req.params;
                const { PayerId } = req.params;
                const industry = await learn.findById(id);
                const Payer = industry.Payer.find(i => i._id == PayerId);
                if (Payer) {
                    res.status(200).json(Payer);
                } else {
                    res.status(404).json({ message: "Payer not found" });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        };
        

    exports.patchEmer= async(req,res)=>{
        const desc = req.body.desc
        const title=req.body.title
        const img= req.body.img
        // const id=req.body.id
        const EmerId = req.params.id
        //  const id=req.params.id
        //   console.log(name,req,id)
        console.log(EmerId)
    console.log(req.body)
    
        let queryObj = { _id: mongoose.Types.ObjectId("646223526b35ea701d77405f"), "Emer._id": mongoose.Types.ObjectId(EmerId) }
    
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                // "sol.$.imgtitle": imgtitle,
                "Emer.$.desc.0": desc[0],
                "Emer.$.desc.1": desc[1],
                "Emer.$.desc.2": desc[2],
                "Emer.$.desc.3": desc[3],
                "Emer.$.title":title,
                "Emer.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await learn.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    
        // console.log(req.body)
    
    }

    

    exports.patchlife = async (req, res) => {

        //    const imgtitle = req.body.imgtitle;
        const desc = req.body.desc
        const title=req.body.title
        const img= req.body.img
        // const id=req.body.id
        const lifeId = req.params.id
        //  const id=req.params.id
        //   console.log(name,req,id)
        console.log(lifeId)
    console.log(req.body)
    
        let queryObj = { _id: mongoose.Types.ObjectId("646223526b35ea701d77405f"), "life._id": mongoose.Types.ObjectId(lifeId) }
    
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                // "sol.$.imgtitle": imgtitle,
                "life.$.desc.0": desc[0],
                "life.$.desc.1": desc[1],
                "life.$.desc.2": desc[2],
                "life.$.desc.3": desc[3],
                "life.$.title":title,
                "life.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await learn.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    
        // console.log(req.body)
    
    }



    exports.patchprovider = async (req, res) => {

        //    const imgtitle = req.body.imgtitle;
        const desc = req.body.desc
        const title=req.body.title
        const img= req.body.img
        // const id=req.body.id
        const providersId = req.params.id
        //  const id=req.params.id
        //   console.log(name,req,id)
        console.log(providersId)
    console.log(req.body)
    
        let queryObj = { _id: mongoose.Types.ObjectId("646223526b35ea701d77405f"), "providers._id": mongoose.Types.ObjectId(providersId) }
    
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                // "sol.$.imgtitle": imgtitle,
                "providers.$.desc.0": desc[0],
                "providers.$.desc.1": desc[1],
                "providers.$.desc.2": desc[2],
                "providers.$.desc.3": desc[3],
               
                "providers.$.title":title,
                "providers.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await learn.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    
        // console.log(req.body)
    
    }


    exports.patchPayers = async (req, res) => {

        //    const imgtitle = req.body.imgtitle;
        const desc = req.body.desc
        const title=req.body.title
        const img= req.body.img
        // const id=req.body.id
        const PayersId = req.params.id
        //  const id=req.params.id
        //   console.log(name,req,id)
        console.log(PayersId)
    console.log(req.body)
    
        let queryObj = { _id: mongoose.Types.ObjectId("646223526b35ea701d77405f"), "Payers._id": mongoose.Types.ObjectId(PayersId) }
    
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                // "sol.$.imgtitle": imgtitle,
                "Payers.$.desc.0": desc[0],
                "Payers.$.desc.1": desc[1],
                "Payers.$.desc.2": desc[2],
                "Payers.$.desc.3": desc[3],
                "Payers.$.title":title,
                "Payers.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await learn.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    
        // console.log(req.body)
    
    }
