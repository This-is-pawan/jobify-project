import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardLayout, { useDashboardContext } from "../pages/DashboardLayout";
import Logout from "../pages/Logout";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
  const {toggleSideBar}=useDashboardContext(DashboardLayout) 
  // const {isDarkTheme}=useDashboardContext()
  
  return (
    <div className={`w-full flex justify-around items-center bg-gray-700   h-28`}>
     
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
      <ThemeToggle/>
      <div><Logout/></div>
    </div>
  );
};

export default Navbar;
