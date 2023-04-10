const mongoose = require('mongoose');
const whychoose = new mongoose.Schema({



        title: { type: Array, required: false },
      

        desc: [{
            number: { type: String, required: false },
            detail: { type: String, required: false }
        }],
        img: { type: Array, required: false },





})
exports.whychoose = mongoose.model("Whychoose", whychoose)

// "title": ["Why Choose Us"],
//                 "desc": [{
//                     "number": "01",
//                     "detail": "Strong domain knowledge in Drug Development and very strong domain knowledge in other areas as well"

//                 },
//                 {
//                     "number": "02",
//                     "detail": "BOT model allows you to free up cash flow for other strategic initiatives (reduce your technology investment cost)"
//                 },
//                 {
//                     "number": "03",
//                     "detail": "Our offshore development centre allows you to scale technology & backend operations at will with best price in the industry"

//                 },
//                 {
//                     "number": "04",
//                     "detail": " Proven history of building enterprise level products in drug development industry and testing"
//                 },
//                 {
//                     "number": "05",
//                     "detail": "Connection with large Life Sciences companies help to cosell Paradigm IP and in drug development industry"
//                 },
//                 {
//                     "number": "06",
//                     "detail": "  Our implementation of clinical solutions such as CTMS and Project Planning tools will help integrate with customer environment seamlessly with their corporate study tracking tools."
//                 }

//                 ],
//                 "img": ["https://i.pinimg.com/736x/4c/44/39/4c443992f6106654fc270b3ca708d29e.jpg"]

            