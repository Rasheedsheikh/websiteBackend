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
        const result = await learnmore.findById(req.params.id);
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
                const industry = await learnmore.findById(id);
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
                const industry = await learnmore.findById(id);
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
                const industry = await learnmore.findById(id);
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
                const industry = await learnmore.findById(id);
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
        const desc = req.body.desc;
        const desctitle=req.body.desctitle
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
                "Emer.$.desc": desc,
                "Emer.$.desctitle":desctitle,
                "Emer.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await learnmore.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    
        // console.log(req.body)
    
    }

    

    exports.patchlife = async (req, res) => {

        //    const imgtitle = req.body.imgtitle;
        const desc = req.body.desc;
        const desctitle=req.body.desctitle
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
                "life.$.desc": desc,
                "life.$.desctitle":desctitle,
                "life.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await learnmore.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    
        // console.log(req.body)
    
    }



    exports.patchprovider = async (req, res) => {

        //    const imgtitle = req.body.imgtitle;
        const desc = req.body.desc;
        const desctitle=req.body.desctitle
        const img= req.body.img
        // const id=req.body.id
        const providerId = req.params.id
        //  const id=req.params.id
        //   console.log(name,req,id)
        console.log(providerId)
    console.log(req.body)
    
        let queryObj = { _id: mongoose.Types.ObjectId("646223526b35ea701d77405f"), "provider._id": mongoose.Types.ObjectId(providerId) }
    
        console.log(queryObj)
    
        let updateObj = {
            $set: {
                // "sol.$.imgtitle": imgtitle,
                "provider.$.desc": desc,
                "provider.$.desctitle":desctitle,
                "provider.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await learnmore.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    
        // console.log(req.body)
    
    }


    exports.patchPayers = async (req, res) => {

        //    const imgtitle = req.body.imgtitle;
        const desc = req.body.desc;
        const desctitle=req.body.desctitle
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
                "Payers.$.desc": desc,
                "Payers.$.desctitle":desctitle,
                "Payers.$.img":img
                
                // "insider.$.button": button
            }
        }
        let item = await learnmore.findOneAndUpdate(queryObj, updateObj, { new: true })
        res.send(item)
        console.log(item,updateObj)
    
        // console.log(req.body)
    
    }
