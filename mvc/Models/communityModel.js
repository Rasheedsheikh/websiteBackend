const why= new mongoose.Schema({


    title:{type:Array,required:false},
    desc:[{
        number:{type:String,required:false},
        detail:{type:String,required:false},
    }
],

img:{type:Array,required:false},

})
const Why=mongoose.model("Why",why)