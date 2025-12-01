import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Globalcontext } from "../components/ContextApi";
import { useDashboardContext } from "./DashboardLayout";

const AddJob = () => {
  const navigate = useNavigate();
  // const {Getdatajob } = Globalcontext();
  const { Getdatajob } = useDashboardContext();

  const [jobPosition, setJobPosition] = useState("developer");
  const [company, setCompany] = useState("google");
  const [jobLocation, setJobLocation] = useState(" new-york");
  const [jobStatus, setJobStatus] = useState("pending");
  const [jobType, setJobType] = useState("part-time");
  const AddJobHandle = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials=true
    const job = {
      jobPosition,
      company,
      jobLocation,
      jobStatus,
      jobType,
    };

    try {
      const { data } = await axios.post(
        "https://jobify-project-zxis.onrender.com/api/v1/jobs",
        job,
        { withCredentials: true }
      );
      // console.log(data);
      if (data.success) {
        toast.success(data.message);
        Getdatajob();
        navigate("all-jobs");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full h-[80vh] flex items-start justify-center p-4  ">
      <div className="w-full max-w-5xl  shadow-xl rounded-2xl p-8 bg-white xl:relative top-[7rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 ">
          Add Job
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div>
            <label
              htmlFor="position"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter job position"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="jobLocation"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Job Location
            </label>
            <input
              type="text"
              id="jobLocation"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter job location"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="jobStatus"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Job Status
            </label>
            <select
              id="jobStatus"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setJobStatus(e.target.value)}
              value={jobStatus}
            >
              <option value="">Select status</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="jobType"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Job Type
            </label>
            <select
              id="jobType"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setJobType(e.target.value)}
              value={jobType}
            >
              <option value="">Select type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            onClick={AddJobHandle}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
