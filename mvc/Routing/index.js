const express = require('express');
const routes = express.Router();


const uploadController = require('../controllers/uploadController');
const serviceController = require("../controllers/servicesController")
const jobsController= require("../controllers/jobsController")

const solutionController= require("../controllers/solutionsController");
const communityController = require('../controllers/communityController');
const industriesController=require("../controllers/industriesController")
const testimonialsController= require("../controllers/testimonialsController")
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// routes.get('/upload', uploadController.getAll);
///services
routes.get("/get-service", serviceController.getService)
routes.post("/post-service", serviceController.createService)

// solutions
routes.get("/get-solutions", solutionController.getSolutions)
// jobs
routes.get("/get-jobs", jobsController.getJobs)
routes.get("/jobsById",jobsController.getJobsById)
// community
routes.get("/get-community", communityController.getCommunity)
routes.post("/post-community", communityController.createCommunity)

// industries

routes.post("/post-industries", industriesController.postIndustries)

// testimonials
routes.post("/post-testimonials", testimonialsController.postTestimonials)
routes.get("/get-testimonials",testimonialsController.getTestimonials)
// apply(upload)
routes.post("/post-upload", uploadController.postUpload)


module.exports = routes; 