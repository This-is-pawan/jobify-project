import React from "react";
import { useDashboardContext } from "./DashboardLayout";
import { FaLocationArrow, FaBriefcase } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5"
const AllJobs = () => {
  const { getjob, setGetjob } = useDashboardContext();
  console.log(getjob);

  return (
    <div className="p-4 h-screen">
      <div className=" w-full shadow-xl bg-pink-100 rounded-lg  ">
        <div className="w-full flex justify-around item-center border-b-[1px] border-cyan-900 p-4">
          <article className="w-12  h-12 text-center p-2 bg-pink-400 text-2xl leading-8 font-bolder text-black rounded-lg">A</article>
        
          <span className="text-xl"> <p className="text-xl font-semibold">App developer</p>Coin</span>
        </div>
        <div className="p-4  md:flex justify-around items-center xl:grid grid-cols-2 gap-5">
          <p className=" flex items-center max:sm m-4 ">
            <FaLocationArrow className="mx-2" />
            Earth
          </p>
          <p className=" flex items-center  max:sm m-4  ">
            <FaBriefcase className="mx-2" />
            Full-Time
          </p>
          <p className=" flex items-center  m-4 ">
            <IoCalendarNumberSharp className="mx-2" />
            jun 18th 2025
          </p>
          <p className="w-24 mt-6 bg-green-400 p-2 rounded text-black">
            pending
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
    </div>
  );
};

export default AllJobs;
