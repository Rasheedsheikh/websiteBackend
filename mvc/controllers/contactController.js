const mongoose = require('mongoose');
const { contact } = require("../Models/contactModel")

exports.getContact = async (req, res) => {
    const data = await contact.find()
    res.send(data)
}

exports.postContact = async (req, res) => {
    const data = await contact.create(req.body)
    res.send(data)
}

// exports.findContactById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { quoteId } = req.params;
//         const data = await contact.findById(id);
//         const quote = data.quote.find(i => i._id == quoteId);
//         if (quote) {
//             res.status(200).json(quote);
//         } else {
//             res.status(404).json({ message: "quote not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

exports.findContactById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const data = await contact.findById(id);
        // const address = data.address.find(i => i._id == addressId);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: " not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.patchContact = async (req, res) => {
    try {
        const heading1 = req.body.heading1;
        const heading2 = req.body.heading2;
        const title= req.body.title
        const line1 = req.body.line1;
        const line2 = req.body.line2;
        const Email = req.body.Email
        const Telephone = req.body.Telephone
        const  id = req.params.id
     

        console.log(req)
        console.log('raja')

        let queryObj = {
            _id: mongoose.Types.ObjectId(id),
           
        }

        // console.log(queryObj)

        let updateObj = {
            $set: {
                "title":title,
                "heading1": heading1,
                "heading2": heading2,
                "line1": line1,
                "line2": line2,
                "Email": Email,
                "Telephone": Telephone,   
            }
        }
        let ite = await contact.findOneAndUpdate(queryObj, updateObj ,{ new: true })
        console.log(ite)
        // let data= await contact.find(queryObj)
        // console.log(data)
        res.status(200).send(ite)
        // console.log(item, updateObj)
    } catch (e) {
        console.log({ e });
    }
}


// exports.patchContactquote = async (req, res) => {
//     try {
//         const heading1 = req.body.heading1;
//         const heading2 = req.body.heading2;
//         // const id= req.params
//         const  quoteId  = req.params.id
//         // const   addressId  = req.params.id

//         console.log(req)
//         console.log('raja')

//         let queryObj = {
//             _id: mongoose.Types.ObjectId("645b2beb621458fdd5fdb8da"),
//             // "quote._id": mongoose.Types.ObjectId(quoteId),
//             "quote._id": mongoose.Types.ObjectId(quoteId)
//         }

//         // console.log(queryObj)

//         let updateObj = {
//             $set: {
//                 "quote.$.heading1": heading1,
//                 "quote.$.heading2": heading2,
             
//             }
//         }
//         let item = await contact.findOneAndUpdate(queryObj, updateObj ,{ new: true })
//         console.log(item)
//         // let data= await contact.find(queryObj)
//         // console.log(data)
//         res.status(200).send(item)
//         // console.log(item, updateObj)
//     } catch (e) {
//         console.log({ e });
//     }
// }


