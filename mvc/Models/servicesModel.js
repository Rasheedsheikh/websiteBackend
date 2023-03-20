 const services= new mongoose.Schema({



    what:[{
        title:{type: String,required:false},
        desc:{type: String,required:false},
    }],
    shapes:[{
        number:{type: String,required:false},
        heading:{type: String,required:false},
        desc:{type: Array,required:false},
    }]

})

export const Services=mongoose.model("Services",services)