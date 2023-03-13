const navbar = new mongoose.Schema({
 
 // title:{type: String,required:false},
    // subTitle:{type: String,required:false},
    // content:{type: String,required:false},
    // imgUrl:{type: String,required:false},
    // buttonData:{type: String,required:false},
    // ListData:{type: [
    //     {
    //         title:{type: String,required:false},
    //         subTitle:{type: String,required:false},
    //         content:{type: String,required:false},
    //         imgUrl:{type: String,required:false},
    //         ListData:{type: Array,required:false},

    //     }
})
const Navbar = mongoose.model("Navbar", navbar)