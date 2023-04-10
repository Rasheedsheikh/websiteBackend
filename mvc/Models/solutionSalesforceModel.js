const mongoose = require('mongoose');
const solutionSalesforce= new mongoose.Schema({
    
     img:{type:String,required:false},
     imgtxt:{type:String,required:false},
     imgonimg:{type:String,required:false},
        title:{type:String,required:false},
        para1:{type:String,required:false},
        para2:{type:String,required:false},

    sol:[{
        img:{type:String,required:false},
        imgtitle:{type:String,required:false},
        desctitle:{type:String,required:false},
        desc:{type: String,required:false}
    }]
   

})
exports.solutionSalesforce=mongoose.model("SolutionSalesforce",solutionSalesforce)


