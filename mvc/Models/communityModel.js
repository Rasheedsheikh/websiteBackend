const mongoose = require('mongoose');
const community= new mongoose.Schema({


    title:{type:Array,required:false},
    IMG:{type:Array,required:false},
    details:[{
        heading1:{type:String,required:false},
        heading2:{type:String,required:false},
        desc:{type:String,required:false},
    }
],

images:{type:Array,required:false},
})

exports.community= mongoose.model("Community",community)

