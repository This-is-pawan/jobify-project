import React from "react";
import img from "../assets/move-women-street.svg";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className=" mt-4 ">
      {/* div */}
      <div>
       
      </div>
      <nav>
        <div className="  w-full flex justify-start p-4 items-center  ">
          <article className=" w-14 h-10 rounded bg-pink-300 text-center text-3xl font-bold text-blue-900 cursor-pointer  ">
            J
          </article>{" "}
          <h1 className="font-bold text-4xl mx-3 tracking-wider text-white">
            Jobify
          </h1>
        </div>
      </nav>
      <div className=" w-[90%] h-[55vh] flex justify-bewteen items-center  m-auto">
        <div className="w-full max-sm:">
          <h1 className="max-sm:text-4xl font-bold text-white p-6 text-6xl   ">
            Job{" "}
            <span className=" text-pink-300 ">
              Tracking <span className="text-white">App</span>
            </span>
          </h1>

          <p className="p-6  m-auto text-justify    text-wrap ">
            I'm Peter — Wayfarers, hoodies, next-level taiyaki, Brooklyn cliché,
            blue bottle single-origin coffee, and chia vibes. Aesthetic
            post-ironic Venmo, quinoa lo-fi tote bag, adaptogen everyday carry,
            Meuggins +1 brunch narwhal energy.esthetic post-ironic Venmo, quinoa
            lo-fi tote bag, adaptogen everyday carry, Meuggins +1 brunch{" "}
          </p>
        </div>
        <div className="   max-xl:hidden">
          <img src={img} alt="" className="object-cover  m-auto" />
        </div>
      </div>
      <div className="w-[90%] m-auto">
        <Link to="/register">
          <button className="btn text-white border-white m-4 ">Register</button>
        </Link>
        <Link to="/login">
          {" "}
          <button className="btn text-white border-white m-4 ">
            Login/Demo User
          </button>
        </Link>
      </div>
      {/*  */}
         
    </div>
  );
};

export default Landing;
