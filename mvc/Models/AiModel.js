const mongoose = require('mongoose');
const aiml= new mongoose.Schema({
    
     
        para1:{type:String,required:false},
        line1:{type:String,required:false},
        line2:{type:String,required:false},
        line3:{type:String,required:false},
        // para3:{type:String,required:false},

        para2:{type:String,required:false},
        image:{type:String,required:false},
        title:{type:String,required:false},

    grid:[{
        img:{type:String,required:false},
        title:{type:String,required:false},
    }
        
    ]
    
})
exports.aiml=mongoose.model("Aiml",aiml)




     
