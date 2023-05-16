const express = require('express');
const routes = express.Router();
const uploadController = require('../controllers/uploadController');
const serviceController = require("../controllers/servicesController")
const jobsController= require("../controllers/jobsController")
const solutionController= require("../controllers/solutionsController");
const communityController = require('../controllers/communityController');
const industriesController=require("../controllers/industriesController");
const testimonialsController= require("../controllers/testimonialsController");
const contactController=require("../controllers/contactController");
const whychooseController=require("../controllers/whychooseController");
const salesforceController=require("../controllers/salesforceController");
const videoController = require('../controllers/videoController');
const whyworkwithusController  = require('../controllers/whyworkwithusController');
const fullStackController= require("../controllers/fullstackController");
const botController=require("../controllers/botController");
const learnmoreController=require("../controllers/LearnmoreController")
const aimlController=require("../controllers/aimlController")
// const videoController=require("../controllers/videoController")

// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);
// routes.get('/upload', uploadController.getAll);
// video
routes.get("/get-video", videoController.getVideo)
routes.post("/post-video",videoController.createVideo)
///services
routes.get("/get-service", serviceController.getService)
routes.post("/post-service", serviceController.createService)
routes.get("/:id/shapes/:shapesId",serviceController.findShapesById)
routes.get("/:id/what/:whatId",serviceController.findWhatById)
routes.patch("/services/:id", serviceController.patchServices)
routes.patch("/servicesmain/:id", serviceController.patchServicesMain)

// solutions
routes.get("/get-solutions", solutionController.getSolutions)
routes.post("/post-solutions", solutionController.postSolutions)
routes.get("/:id/heading/:headingId",solutionController.findSolutionsById)
routes.patch("/solutionsMain/:id",solutionController.patchSolutions)

// whyworkwithus
routes.post("/post-workwithus",whyworkwithusController.createWorkwithus)
routes.get("/get-workwithus", whyworkwithusController.getWorkwithus)
routes.patch("/workwithus/:id",whyworkwithusController.patchWhyworkwithus)

//below both routes work for findById.As for everyapi iam using same api so i changed this route. or else both will work.
// routes.get("/:id/workwithus/:id",findWhyworkwithusId)
routes.get("/:id/workwithus",whyworkwithusController.findWhyworkwithusId)

// jobs
routes.post("/post-jobs",jobsController.createJobs)
routes.get("/get-jobs", jobsController.getJobs)
routes.get("/:id/jobs",jobsController.findJobById)
routes.patch("/jobs/:id",jobsController.patchJobs)

// community
routes.get("/get-community", communityController.getCommunity)
routes.post("/post-community", communityController.createCommunity)
routes.get("/:id/details/:detailsId",communityController.findCommunityById)
routes.patch("/community/:id",communityController.patchCommunity)
routes.patch("/communityMain/:id",communityController.patchMainCommunity)

// industries

routes.post("/post-industries", industriesController.postIndustries)
routes.get("/get-industries",industriesController.getIndustries)
routes.patch("/industries/:id", industriesController.patchIndustries)
// routes.post("/fileupload",industriesController.uploadFile)
// routes.get("/industries/xyz", industriesController.deleteIndustries)
routes.get("/:id/insider/:insiderId",industriesController.findInsiderById)
routes.patch("/industriesimg/:id", industriesController.patchIndustriesimg)


// testimonials
routes.post("/post-testimonials", testimonialsController.postTestimonials)
routes.get("/get-testimonials",testimonialsController.getTestimonials)
routes.get("/:id/slide/:slideId",testimonialsController.findTestimoById)
routes.patch("/testimonials/:id",testimonialsController.patchTestimonials)
 

// contact
routes.post("/post-contact", contactController.postContact)
routes.get("/get-contact", contactController.getContact)
routes.get("/:id/contact",contactController.findContactById)
// routes.get("/:id/address/:addressId",contactController.findAddressById)
routes.patch("/contact/:id",contactController.patchContact)
// routes.patch("/contactquote/:id",contactController.patchContactquote)


// whychooseus
routes.post("/post-whychoose", whychooseController.createChoose)
routes.get("/get-whychoose", whychooseController.getChoose)
routes.patch("/whychoose/:id", whychooseController.patchWhychoose)
routes.get("/:id/desc/:descId",whychooseController.findWhyChooseById)

// salesforce
routes.post("/post-salesforce",salesforceController.postSalesforce)
routes.get("/get-salesforce",salesforceController.getSalesforce)
routes.patch("/salesforcemain/:id",salesforceController.patchsalesforce)
routes.get("/:id/salesforce",salesforceController.findsalesforceById)
routes.get("/:id/salesforce/:solId",salesforceController.findSolsalesforceById)
routes.patch("/solsalesforce/:id",salesforceController.patchSolsalesforce)

// fullstack
routes.post("/post-fullStack",fullStackController.postfullStack)
routes.get("/get-fullStack",fullStackController.getfullStack)
routes.patch("/fullStack/:id",fullStackController.patchfullStack)
routes.get("/:id/fullStack",fullStackController.findfullStackById)
routes.get("/:id/fullStack/:fulId",fullStackController.findfulId)
routes.patch("/fulfullStack/:id",fullStackController.patchful)

// bot
routes.post("/post-bot",botController.postbot)
routes.get("/get-bot",botController.getbot)
routes.patch("/bot/:id",botController.patchbot)
routes.get("/:id/bot",botController.findbotById)

// aiml
routes.post("/post-aiml",aimlController.postaiml)
routes.get("/get-aiml",aimlController.getaiml)
routes.patch("/aimlmain/:id",aimlController.patchaiml)
routes.get("/:id/aiml",aimlController.findaimlById)
routes.get("/:id/aiml/:gridId",aimlController.findgridId)
routes.patch("/gridaiml/:id",aimlController.patchgrid)


// video
routes.get("/get-video", videoController.getVideo)
routes.post("/post-video", videoController.createVideo)

// leranmore

routes.get("/get-learnmore", learnmoreController.getlearnmore)
routes.post("/post-learnmore", learnmoreController.postlearnmore)




// apply(upload)
routes.post("/post-upload", uploadController.postUpload)



//email
// routes.post("/post-email",emailController.postMail)
// adminlogin

// routes.post("/post-user", adminLoginController.postUser)
// routes.get("/get-user", adminLoginController.getUser)  
module.exports = routes; 