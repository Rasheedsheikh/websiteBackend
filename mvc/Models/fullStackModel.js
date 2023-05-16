const mongoose = require('mongoose');
const fullStack= new mongoose.Schema({
    
     
        para1:{type:String,required:false},
        para2:{type:String,required:false},
        image:{type:String,required:false},
        title:{type:String,required:false},

    ful:[{
        img:{type:String,required:false},
        desctitle:{type:String,required:false},
        desc:{type: String,required:false}
    }]
   
    
})
exports.fullStack=mongoose.model("FullStack",fullStack)


