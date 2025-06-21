const express = require("express");
const router = express.Router();

// import {getAllJobs,getJob,createJob,update,deleted} from '../controllers/jobcontrollers'
const {
  getAllJobs,
  getJob,
  createJob,
  update,
  deleted,
} = require("../controllers/jobcontrollers");


const {jobParamValidator,validateJobInput}=require('../validator/jobInputvalidator');

// router.get('/',getAllJobs)
// router.post('/',createJob)

router.route("/").get(getAllJobs).post(validateJobInput,createJob);
router.route("/:id").get(getJob).patch(validateJobInput,jobParamValidator,update).delete(jobParamValidator,deleted);
module.exports = router;
