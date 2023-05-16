const mongoose = require('mongoose');
const contact= new mongoose.Schema({
   
        title:{type:String,required:false},
       

              heading1:{type:String,required:false},
              heading2:{type:String,required:false},
            
      
      
            line1:{type:String,required:false},
            line2:{type:String,required:false},
            Email:{type:String,required:false},
            telephone:{type:String,required:false}
    
  
})
exports.contact=mongoose.model("Contact",contact)


