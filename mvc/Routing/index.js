const express = require('express');
const routes = express.Router();


const uploadController = require('../controllers/uploadController');
const serviceController = require("../controllers/servicesController")
const jobsController= require("../controllers/jobsController")

const solutionController= require("../controllers/solutionsController");
const communityController = require('../controllers/communityController');
const industriesController=require("../controllers/industriesController")
const testimonialsController= require("../controllers/testimonialsController")
const contactController=require("../controllers/contactController")
const whychooseController=require("../controllers/whychooseController")

const salesforceController=require("../controllers/salesforceController");
// const { postMail } = require('../controllers/emailController');
const emailController=require("../controllers/emailController");
const adminLoginController = require('../controllers/adminLoginController');


// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// routes.get('/upload', uploadController.getAll);
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
// jobs
routes.get("/get-jobs", jobsController.getJobs)
routes.get("/jobsById",jobsController.getJobsById)
// community
routes.get("/get-community", communityController.getCommunity)
routes.post("/post-community", communityController.createCommunity)

// industries

routes.post("/post-industries", industriesController.postIndustries)
routes.get("/get-industries",industriesController.getIndustries)
routes.patch("/industries/:id", industriesController.patchIndustries)
// routes.get("/industries/xyz", industriesController.deleteIndustries)
routes.get("/:id/insider/:insiderId",industriesController.findInsiderById)

// testimonials
routes.post("/post-testimonials", testimonialsController.postTestimonials)
routes.get("/get-testimonials",testimonialsController.getTestimonials)
routes.get("/:id/slide/:slideId",testimonialsController.findTestimoById)

// contact
routes.post("/post-contact", contactController.postContact)
routes.get("/get-contact", contactController.getContact)

// whychooseus
routes.post("/post-whychoose", whychooseController.createChoose)
routes.get("/get-whychoose", whychooseController.getChoose)
routes.patch("/whychoose/:id", whychooseController.patchWhychoose)
routes.get("/:id/desc/:descId",whychooseController.findWhyChooseById)

// salesforce
routes.post("/post-salesforce",salesforceController.postSalesforce)
routes.get("/get-salesforce",salesforceController.getSalesforce)


// apply(upload)
routes.post("/post-upload", uploadController.postUpload)

//email
routes.post("/post-email",emailController.postMail)
// adminlogin

// routes.post("/post-user", adminLoginController.postUser)
routes.get("/get-user", adminLoginController.getUser)




module.exports = routes; 