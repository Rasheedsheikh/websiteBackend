const mongoose = require('mongoose');
const contact= new mongoose.Schema({
   
        title:{type:Array,required:false},
        quote:[{
              line1:{type:String,required:false},
              line2:{type:String,required:false},
              Email:{type:String,required:false},
              telephone:{type:String,required:false}
        }]
  
})
const Contact=mongoose.model("Contact",contact)