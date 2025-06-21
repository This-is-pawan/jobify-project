import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import  { useDashboardContext } from "../pages/DashboardLayout";
import Logout from "../pages/Logout";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
  const {toggleSideBar,isDarkTheme}=useDashboardContext() 
 
  
  return (
    <div className={`w-full flex justify-around items-center ${isDarkTheme?"bg-gray-700":"bg-pink-50"} bg-gray-700 h-28 xl:fixed top-0 z-10`}>
     
        <button type="button" className="text-3xl p-1 cursor-pointer">
          <FaAlignLeft  onClick={toggleSideBar} />
        </button>
  

      <div className="  w-full flex justify-center p-4 items-center  ">
        <article className=" w-12 h-10 rounded bg-pink-300 text-center text-3xl font-bold text-blue-900 cursor-pointer  ">
          <Link to="/">J</Link>
        </article>{" "}
        <h1 className="font-bold text-4xl mx-3 tracking-wider text-white">
          Jobify
        </h1>
      </div>
      <div className="flex justify-center items-center xl:relative right-[20rem]">
      <ThemeToggle/>
      <div><Logout/></div>
      </div>
    </div>
  );
};

export default Navbar;
