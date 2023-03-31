const express = require('express');
const routes = express.Router();


const uploadController = require('../controllers/uploadController');
const serviceController = require("../controllers/servicesController")
const jobsController= require("../controllers/jobsController")

const solutionController= require("../controllers/solutionsController")
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// routes.get('/upload', uploadController.getAll);
///services
routes.get("/get-service", serviceController.getService)
routes.post("/post-service", serviceController.createService)

// solutions
routes.get("/get-solutions", solutionController.getSolutions)
routes.get("/get-jobs", jobsController.getJobs)
routes.get("./jobsById",jobsController.getJobsById)

// apply(upload)
routes.post("/post-upload", uploadController.postUpload)


module.exports = routes; 