const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
// const Multer = require('multer');
// const {Storage} = require('@google-cloud/storage');
const {format} = require('util');


// import mongoose from "mongoose"
var cors = require('cors')
const routes = require("./mvc/Routing/index");

dotenv.config()
const homeh= require('./data');
// const { patchIndustriesimg } = require("./mvc/controllers/industriesController");

const app = express()
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
app.use(express.json())

const {MONGODB_QUERY,MONGODB_NAME,MONGODB_URI,GCP_BUCKET_NAME,GOOGLE_APPLICATION_CREDENTIALS,NODE_ENV}=process.env
const URI = `${MONGODB_URI}/${MONGODB_NAME}${MONGODB_QUERY}`;

console.log(URI)
//conneting data base
const connect = () => {
    return  mongoose.connect(URI)
}



app.use(express.urlencoded({ extended: false }));



app.get("/home", async (req, res) => {
    // const home = await Jobs.create(req.body)
    res.send(homeh)

})

app.get("/homemain", async (req, res) => {
    // const home = await Jobs.create(req.body)
    res.send(home)

})



// app.post("/jobs", async (req, res) => {
//     const data = await Jobs.create(req.body)
//     res.send(data)

// })
// app.get("/jobs", async (req, res) => {
//     const data = await Jobs.find({})
//     res.send(data)

// })

// app.get("/jobs/:id", async (req, res) => {
//     const data = await Jobs.find({ _id: req.params.id })
//     console.log(req)
//     res.send(data)

// })


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

// const multer = Multer({
//       storage: Multer.memoryStorage(),
//       limits: {
//         fileSize: 100 * 1024 * 1024, 
//       },
//     });

// app.post('/fileUpload', multer.single('file'), async(req,res)=>{
//     console.log(req );

//     // const bucketName = process.env.GCP_BUCKET_NAME;
//     // const fileName = req.file.originalname;
//     // projectId: "urgent-care-306805";
//     const cloudStorage = new Storage({
//       // keyFilename: `${__dirname}/service_account_key.json`,
//       projectId: "urgent-care-306805",
//        bucketName : process.env.GCP_BUCKET_NAME,
//      fileName : req.file.originalname,
//     });

//     const options = {
//       version: 'v4',
//       action: 'write',
//       expires: Date.now() + 15 * 60 * 1000,
//       contentType: req.file.mimetype,
//     };

//     const [url] = await storage
//       .bucket(bucketName)
//       .file(fileName)
//       .getSignedUrl(options);
//     // console.log({ bucketName, fileName, url });

//     res.status(200).send({
//       signedRequest: url,
//       url: `https://storage.googleapis.com/${bucketName}/${fileName}`,
//     })


//   }
// )


// const cloudStorage = new Storage({
//   // keyFilename: `${__dirname}/service_account_key.json`,
//   projectId: "urgent-care-306805",
// });
// const bucketName = "urgentcare-forms-demo";
// const bucket = cloudStorage.bucket(bucketName);
// app.post("/fileupload", multer.single("file"), function (req, res, next) {

// //  var arr =[
// //   "industry"
// //  ]
// const insiderId=req.params.id
//   console.log(req.id)
//   console.log(req.file);
//   console.log(req.body)
//   if (!req.file) {
//     res.status(400).send("No file uploaded.");
//     return;
//   }
//   const blob = bucket.file(req.file.originalname);
//   const blobStream = blob.createWriteStream();
//   blobStream.on("error", (err) => {
//     next(err);
//   });
//   blobStream.on("finish", () => {
//     // The public URL can be used to directly access the file via HTTP.
//     const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);

//     let queryObj = { _id: mongoose.Types.ObjectId("64468f679bb39d6dc38af1fa"), "insider._id": mongoose.Types.ObjectId(insiderId) }

//     console.log(queryObj)

//     let updateObj = {
//         $set: {
//             // "insider.$.title": title,
//             // "insider.$.desc": desc,
//             // "insider.$.button": button,
//             "insider.$.img": publicUrl
//         }
//     }
//     let item =  industries.findOneAndUpdate(queryObj, updateObj, { new: true })
//     res.send(item)
//     console.log(item,updateObj)


//     // if (res) {
//     //   patchIndustriesimg
//     // }
//     res.status(200).json({ publicUrl });

//   });
//   blobStream.end(req.file.buffer);
  
// });
// const multer = Multer({
//     storage: Multer.memoryStorage(),
//     limits: {
//       fileSize: 100 * 1024 * 1024, 
//     },
//   });


//   const storage = new Storage();
//   const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);


// app.post('/fiupload', multer.single('file'), (req, res, next) => {
//     if (!req.file) {
//       res.status(400).send('No file uploaded.');
//       return;
//     }
//     console.log({req})
  
   
//     const blob = bucket.file(req.file.originalname);
//     const blobStream = blob.createWriteStream();
//     blobStream.on('error', err => {
//       next(err);
//     });
  
//     blobStream.on('finish', () => {
//       const publicUrl = format(
//         `https://storage.googleapis.com/${bucket.name}/${blob.name}`
//       );
//       res.status(200).send(publicUrl);
//     });
  
//     blobStream.end(req.file.buffer);
//   });
  




// Instantiate a storage client
// const storage = new Storage();

// app.set('view engine', 'pug');

// // This middleware is available in Express v4.16.0 onwards
// app.use(express.json());

// Multer is required to process file uploads and make them available via
// req.files.
// const multer = Multer({
//   storage: Multer.memoryStorage(),
//   limits: {
//     fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
//   },
// });

// A bucket is a container for objects (files).
//  const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);

// // Display a form for uploading files.
// app.get('/', (req, res) => {
//   res.render('form.pug');
// });

// Process the file upload and upload to Google Cloud Storage.
// app.post('/upload', multer.single('file'), (req, res, next) => {
//   if (!req.file) {
//     res.status(400).send('No file uploaded.');
//     return;
//   }

//   // Create a new blob in the bucket and upload the file data.
//   const blob = bucket.file(req.file.originalname);
//   const blobStream = blob.createWriteStream();

//   blobStream.on('error', err => {
//     next(err);
//   });

//   blobStream.on('finish', () => {
//     // The public URL can be used to directly access the file via HTTP.
//     const publicUrl = format(
//       `https://storage.googleapis.com/${urgentcare-forms-demo}/${blob.name}`
//     );
//     res.status(200).send(publicUrl);
//   });

//   blobStream.end(req.file.buffer);
// });


// const storage = new Storage({
//   projectId: 'YOUR_PROJECT_ID',
//   keyFilename: 'GCPCREDENTIALS.json'
// });

// app.set('view engine', 'pug');

// // This middleware is available in Express v4.16.0 onwards
// app.use(express.json());

// // Multer is required to process file uploads and make them available via
// // req.files.
// const multer = Multer({
//   storage: Multer.memoryStorage(),
//   limits: {
//     fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
//   },
// });

// // A bucket is a container for objects (files).
// const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);

// // Display a form for uploading files.
// app.get('/', (req, res) => {
//   res.render('form.pug');
// });

// // Process the file upload and upload to Google Cloud Storage.
// app.post('/upload', multer.single('file'), (req, res, next) => {
//   if (!req.file) {
//     res.status(400).send('No file uploaded.');
//     return;
//   }

//   // Create a new blob in the bucket and upload the file data.
//   const blob = bucket.file(req.file.originalname);
//   const blobStream = blob.createWriteStream();

//   blobStream.on('error', err => {
//     next(err);
//   });

//   blobStream.on('finish', () => {
//     // The public URL can be used to directly access the file via HTTP.
//     const publicUrl = format(
//       `https://storage.googleapis.com/${process.env.GCP_BUCKET_NAME}/${blob.name}`
//     );
//     res.status(200).send(publicUrl);
//   });

//   blobStream.end(req.file.buffer);
// });


const port = process.env.PORT || 2233
app.use('/',routes);


app.timeout = 300
app.listen(port, async () => {
    //http://localhost:2233/home
    await connect()
    console.log("Server is running on http://localhost:"+port)
})