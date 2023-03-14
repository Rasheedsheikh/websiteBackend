const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
// import mongoose from "mongoose"
var cors = require('cors')

dotenv.config()
const homeh= require('./data')

const app = express()
app.use(
    cors({
        origin: "*"
    })
)
app.use(express.json())

const {MONGODB_QUERY,MONGODB_NAME,MONGODB_URI}=process.env
const URI = `${MONGODB_URI}/${MONGODB_NAME}${MONGODB_QUERY}`;

console.log(URI)
//conneting data base
const connect = () => {
    return  mongoose.connect(URI)
}



app.use(express.urlencoded({ extended: false }));

//app.use(express.static('public'))


const home = new mongoose.Schema({
    Titleimg :{type: String,required:false},
    NavRoutes:{type: Array,required:false},
     Services:  {type:{ 
        what:[{
            title:{type: String,required:false},
            desc:{type: String,required:false},
        }],
        shapes:[{
            number:{type: String,required:false},
            heading:{type: String,required:false},
            desc:{type: Array,required:false},
        },
        {
            number:{type: String,required:false},
            heading:{type: String,required:false},
            desc:{type: Array,required:false},
        },
        {
            number:{type: String,required:false},
            heading:{type: String,required:false},
            desc:{type: Array,required:false},
        }]
    },required:false},

    Industries:{type:{
        heading:{type: Array,required:false},
        insider:{type:[{
            img:{type: String,required:false},
            title:{type: String,required:false},
            desc:{type: String,required:false},
            button:{type: String,required:false}
        }],required:false}
    },required:false}, 

    Solutions:{
        heading:{type:[{
            title:{type: String,required:false},
            desc:{type: String,required:false},
        }],required:false},
        Images:{type:[{
            img:{type: String,required:false},
            title:{type: String,required:false},

        },
        {
            img:{type: String,required:false},
            title:{type: String,required:false},

        },
        {
            img:{type: String,required:false},
            title:{type: String,required:false},

        },
        {
            img:{type: String,required:false},
            title:{type: String,required:false},

        }]
    },required:false},

    Testimonials:{type:{
        main:[{
            title:{type:Array,required:false},
            img:{type:Array,required:false},

            slide:[{
                 desc:{type:String,required:false},
                 name:{type:String,required:false},
                 role:{type:String,required:false},
                 at:{type:String,required:false},
            },
            {
                desc:{type:String,required:false},
                name:{type:String,required:false},
                role:{type:String,required:false},
                at:{type:String,required:false},
           },
           {
            desc:{type:String,required:false},
            name:{type:String,required:false},
            role:{type:String,required:false},
            at:{type:String,required:false},
       },
        ]
        }]
    },
    contact:[{
        title:{type:Array,required:false},
        quote:[{
              line1:{type:String,required:false},
              line2:{type:String,required:false},
              Email:{type:String,required:false},
              telephone:{type:String,required:false}
        }]
    }],
    why:[{
        title:{type:Array,required:false},
        desc:[{
            number:{type:String,required:false},
            detail:{type:String,required:false},
        },
        {
            number:{type:String,required:false},
            detail:{type:String,required:false},
        },
        {
            number:{type:String,required:false},
            detail:{type:String,required:false},
        },{
            number:{type:String,required:false},
            detail:{type:String,required:false},
        },
        {
            number:{type:String,required:false},
            detail:{type:String,required:false},
        }],
   
    img:{type:Array,required:false},
}],
    required:false}



})
const Home = mongoose.model("Home", home)





const jobs = new mongoose.Schema({
    email: { type: String, required: false },
    title: { type: String, required: false },
    Experience: { type: String, required: false },
    jobtype: { type: String, required: false },
    Location: { type: String, required: false },
    desc: { type: String, required: false },
    desc2: { type: Array, required: false },
    jobunction: { type: String, required: false },
    Schedule: { type: String, required: false },
    Education: { type: String, required: false },

})
const Jobs = mongoose.model("Jobs", jobs)



const navbar = new mongoose.Schema({
    NavRoutes:{type: Array,required:false},
 

})
const Navbar = mongoose.model("Navbar", navbar)



const upload = new mongoose.Schema({

    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true },
    MobileNumber: { type: String, required: true },
    ExperienceInYears: { type: String, required: true },
    EducationQualification: { type: String, required: true },
    Resume: { type: String, required: true },
    jobID: { type: String, required: true }

})

const Upload = mongoose.model("Upload", upload)

app.get("/home", async (req, res) => {
    // const home = await Jobs.create(req.body)
    res.send(homeh)

})

app.get("/homemain", async (req, res) => {
    // const home = await Jobs.create(req.body)
    res.send(home)

})



app.post("/jobs", async (req, res) => {
    const data = await Jobs.create(req.body)
    res.send(data)

})
app.get("/jobs", async (req, res) => {
    const data = await Jobs.find({})
    res.send(data)

})

app.get("/jobs/:id", async (req, res) => {
    const data = await Jobs.find({ _id: req.params.id })
    console.log(req)
    res.send(data)

})

app.post("/upload", async (req, res) => {
    Upload.create(req.body)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            err("fill all fields")
        })
    res.send(data)

})

app.get("/searchjob", async (req, res) => {
    let sear=req.query.searchTxt;
    console.log(sear)
    let space = await Jobs.find({
        title: {
            $regex: `${sear}`,
            $options: 'i',
        },
    })
            // let space = await Jobs.find({title: "Full Stack Developer"})
    console.log({space})
    // console.log('-------------search api-------------'+ JSON.stringify(req.query))

    res.send(space)
    
})

// app.get("/filter", async (req, res) => {
//    let whereQuery={}
   
//     if (body?.Development) {
//         whereQuery = { ...whereQuery, Development: body?.Development }
//     }
//     if (body?.Design) {
//         whereQuery = { ...whereQuery, Design: body?.Design }
//     }

//     if (body?.Management) {
//         whereQuery = { ...whereQuery, Management: body?.Management }
//     }
    
//     let filter = await Jobs.find({whereQuery})
//     res.send(filter)
    
   

// })

// navbar

// app.post("/nav", async (req, res) => {
//     const data = await Navbar.create(req.body)
//     console.log(data)
//     res.send(data)

// })
// app.get("/nav", async (req, res) => {
//     const data = await Navbar.find({})
//     res.send(data)

// })
// app.put("/nav", async (req, res) => {
//     const data = await Navbar.find({})
//     res.send(data)

// })


// app.get("/",async getAppointments(@Body() params: any) {
//     console.log({ params });
//     const bucketName = process.env.GCP_BUCKET_NAME;
//     const fileName = params.fileName;
//     const fileType = params.fileType;
//     const options = {
//       version: 'v4',
//       action: 'write',
//       expires: Date.now() + 15 * 60 * 1000,
//       contentType: fileType,
//     };

//     const [url] = await storage
//       .bucket(bucketName)
//       .file(fileName)
//       .getSignedUrl(options);
//     console.log({ bucketName, fileName, url });
//     return {
//       signedRequest: url,
//       url: `https://storage.googleapis.com/${bucketName}/${fileName}`,
//     };
//   }


const port = process.env.PORT || 2233



app.timeout = 300
app.listen(port, async () => {
    //http://localhost:2233/home
    await connect()
    console.log("Server is running on http://localhost:"+port)
})