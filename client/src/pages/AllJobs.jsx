import React, { useState } from "react";
import { useDashboardContext } from "./DashboardLayout";
import { FaLocationArrow, FaBriefcase } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5"
import { Globalcontext } from "../components/ContextApi";
const AllJobs = () => {

const {getjob}=useDashboardContext()
console.log(getjob);



  
  return (
    <div className="p-4 h-screen">


      {getjob?.map((item,index)=>{
     const {
          company,
          jobLocation,
          jobPosition,
          jobStatus,
          jobType,
          createdAt,
          _id
        } = item;
        const dateObj = new Date(createdAt);
        const formattedDate = dateObj.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });


   return  <div className=" w-full shadow-xl bg-pink-800 rounded-lg  ">
        <div className="w-full flex justify-around item-center border-b-[1px] border-cyan-900 p-4 m-4" key={_id}>

          <article className="w-12  h-12 text-center p-2 bg-pink-400 text-2xl leading-8 font-bolder text-black rounded-lg capitalize">{company.charAt(0)}</article>
        
          <span className="text-xl"> <p className="text-xl font-semibold capitalize">{jobPosition}</p>{company}</span>
        </div>
       
        <div className=" md:flex justify-around items-center xl:grid grid-cols-2 gap-5">
          <p className=" flex items-center max:sm m-4 ">
            <FaLocationArrow className="mx-2" />
         {jobLocation}
          </p>
          <p className=" flex items-center  max:sm m-4  ">
            <FaBriefcase className="mx-2" />
            Full-Time
          </p>
          <p className=" flex items-center  m-4 ">
            <IoCalendarNumberSharp className="mx-2" />
           {formattedDate}
           
           
          </p>
          <p className="w-24 mt-6 bg-green-400 p-2 rounded text-black">
            {jobStatus}
          </p>
          {/* <p className="w-24 mt-4 bg-pink-300 tracking-wider p-2 rounded text-black">
            interview
          </p> */}
        </div>
        <div className="">
          <button className="bg-pink-200 m-2 p-2 rounded-lg text-black ">
            Edit
          </button>
          <button className="bg-pink-200 m-2 p-2 rounded-lg text-black ">
            Delete
          </button>
        </div>
      </div>
        })}
    </div>
  );
};

export default AllJobs;
