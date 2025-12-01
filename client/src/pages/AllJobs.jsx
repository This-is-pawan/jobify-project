import React from "react";
import { useDashboardContext } from "./DashboardLayout";
import { FaLocationArrow, FaBriefcase } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, Outlet } from "react-router-dom";


const AllJobs = () => {
  const { getjob ,Getdatajob} = useDashboardContext();

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`https://jobify-project-zxis.onrender.com/api/v1/jobs",/api/v1/jobs/${id}`, {
        withCredentials: true,
      });
      // console.log(data);
      
      if (data.success) {
        toast.success('deleted successfully');
        Getdatajob()
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  };

  return (
    <div className="p-4 h-screen overflow-y-auto">
      {getjob?.map((item) => {
        const {
          _id,
          company,
          jobLocation,
          jobPosition,
          jobStatus,
          jobType,
          createdAt,
        } = item;

        const dateObj = new Date(createdAt);
        const formattedDate = dateObj.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });

        return (
          <div key={_id} className="w-full shadow-xl bg-pink-800 rounded-lg my-4 xl:relative top-[6rem]">
            
            {/* Header */}
            <div className="w-full flex justify-around items-center border-b border-cyan-900 p-4">
              <article className="w-12 h-12 text-center p-2 bg-pink-400 text-2xl font-bold text-black rounded-lg uppercase">
                {company.charAt(0)}
              </article>
              <div className="text-xl tracking-wider capitalize">
                <p className="font-semibold">{jobPosition}</p>
                <span>{company}</span>
              </div>
            </div>

            {/* Info Section */}
            <div className="md:flex justify-around items-center xl:grid grid-cols-2">
              <p className="flex items-center m-4">
                <FaLocationArrow className="mx-2" />
                {jobLocation}
              </p>
              <p className="flex items-center m-4">
                <FaBriefcase className="mx-2" />
                {jobType}
              </p>
              <p className="flex items-center m-4">
                <IoCalendarNumberSharp className="mx-2" />
                {formattedDate}
              </p>
              <p className="w-24 m-4 bg-green-400 p-2 rounded text-black text-center">
                {jobStatus}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end p-4">
              
              <button className="bg-pink-200 mx-2 px-4 py-2 rounded-lg text-black hover:bg-pink-300">
         <Link to={`/dashboard/edit-job/${_id}`}>Edit</Link>

              </button>
              <button
                className="bg-pink-200 mx-2 px-4 py-2 rounded-lg text-black hover:bg-red-400"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllJobs;
