const mongoose = require('mongoose');


const solutions = new mongoose.Schema({


    
        heading: [{
            title: { type: String, required: false },
            desc: { type: String, required: false },
        }],
    
 
        
            img: { type: String, required: false }
            

     
    


    })


    exports.solutions = mongoose.model("Solutions", solutions)