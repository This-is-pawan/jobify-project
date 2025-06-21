// const { nanoid } = require("nanoid");

// const StatusCodes=require('http-status-codes')
const jobs = require("../models/jobModels");

// get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const AllJobs = await jobs.find();
    res.status(200).json({
      success: true, 
      message: "All jobs fetched successfully",
      AllJobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false, 
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};

//

// create job
exports.createJob = async (req, res) => {
  const { company, jobPosition,  jobLocation,  jobStatus,  jobType } = req.body;

  if (!company || !jobPosition || ! jobLocation || !jobStatus || ! jobType) {
    return res.status(400).json({ msg: " miss to !company  !jobPosition  ! jobLocation  ! jobStatus  ! jobType" });
  }

  try {
    // const repeatUser = await jobs.findOne({
    //   company,
    //   jobPosition,
    //    jobLocation,
    //    jobStatus,
    //    jobType,
    // });

    // if (repeatUser) {
    //   return res.status(400).json({ msg: "Job already exists" });
    // }

    // Create new job
    const job = await jobs.create({
      company,
      jobPosition,
       jobLocation,
       jobStatus,
       jobType,
    
    });

    if (!job) {
      return res.status(500).json({ msg: "Failed to create job" });
    }

    res.status(201).json({success:true, msg: "Job created successfully", data: job });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};
// get single job
exports.getJob = async (req, res) => {
  const { id } = req.params;
  const job = await jobs.findById(id);

  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }

  res.json({ message: "Data show success", data: job });
};
// update
exports.update = async (req, res) => {
 
  
  const { company, jobPosition,  jobLocation,  jobStatus,  jobType } = req.body;
  if (!company || !jobPosition || ! jobLocation || ! jobStatus || ! jobType) {
    return res.json({ msg: "please company and jobPosition" });
  }
  const { id } = req.params;

 if (req.file) {
      req.body.avatar = `/uploads/${req.file.filename}`;
      req.body.avatarPublicId = req.file.filename;
    }



  const job = await jobs.findByIdAndUpdate(id, req.body, { new: true });

  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }

  res.json({success:true , message: "job modified",  job });
};
// delete
exports.deleted = async (req, res) => {
  const { id } = req.params;
  const job = await jobs.findByIdAndDelete(id);

  if (!job) {
    return res.status(404).json({success:false, msg: `No job with id ${id}` });
  }

  res.json({
    success:true,
    msg: "Job deleted successfully",
    data: job,
  });
};
