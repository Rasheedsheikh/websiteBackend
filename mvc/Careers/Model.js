const jobs= new mongoose.Schema({
    email:{type:String,required:false},
    title:{type:String,required:false},
    Experience:{type:String,required:false},
    jobtype:{type:String,required:false},
    Location:{type:String,required:false},
    desc:{type:Array,required:false},
    
   


})
const Jobs=mongoose.model("Jobs",jobs)


