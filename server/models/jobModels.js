const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema(
  {
    company: String,
    jobPosition: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
     createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  },
  { timestamps: true } // createAt,updateAt
);

const jobs = mongoose.model("JOB", JobSchema);
module.exports = jobs;
