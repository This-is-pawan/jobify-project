// const { nanoid } = require("nanoid");

// const StatusCodes=require('http-status-codes')
const jobs = require("../models/jobModels");

// get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    res.status(200).json({
      message: "All jobs fetched successfully",
      data: await jobs.find(),
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};
//

// create job
exports.createJob = async (req, res) => {
  const { company, position,  jobLocation,  jobStatus,  jobType } = req.body;

  if (!company || !position || ! jobLocation || !jobStatus || ! jobType) {
    return res.status(400).json({ msg: " miss to !company  !position  ! jobLocation  ! jobStatus  ! jobType" });
  }

  try {
    const repeatUser = await jobs.findOne({
      company,
      position,
       jobLocation,
       jobStatus,
       jobType,
    });

    if (repeatUser) {
      return res.status(400).json({ msg: "Job already exists" });
    }

    // Create new job
    const job = await jobs.create({
      company,
      position,
       jobLocation,
       jobStatus,
       jobType,
    });

    if (!job) {
      return res.status(500).json({ msg: "Failed to create job" });
    }

    res.status(201).json({ msg: "Job created successfully", data: job });
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
  const { company, position,  jobLocation,  jobStatus,  jobType } = req.body;
  if (!company || !position || ! jobLocation || ! jobStatus || ! jobType) {
    return res.json({ msg: "please company and position" });
  }
  const { id } = req.params;
  const job = await jobs.findByIdAndUpdate(id, req.body, { new: true });

  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }

  res.json({ message: "job modified", data: job });
};
// delete
exports.deleted = async (req, res) => {
  const { id } = req.params;
  const job = await jobs.findByIdAndDelete(id);

  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }

  res.json({
    msg: "Job deleted successfully",
    data: job,
  });
};
