const mongoose = require('mongoose');
const bot= new mongoose.Schema({
    
     
        para1:{type:String,required:false},
        para2:{type:String,required:false},
        image:{type:String,required:false},
        img:{type:String,required:false},
        title:{type:String,required:false},
   
   
   
    
})
exports.bot=mongoose.model("Bot",bot)


