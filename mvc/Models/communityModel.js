const mongoose = require('mongoose');
const community= new mongoose.Schema({


    title:{type:Array,required:false},
    desc:[{
        number:{type:String,required:false},
        detail:{type:String,required:false},
    }
],

img:{type:Array,required:false},
})

exports.community= mongoose.model("Community",community)