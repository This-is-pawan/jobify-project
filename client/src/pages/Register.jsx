import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Globalcontext } from "../components/ContextApi";

function Register() {
  const navigate = useNavigate();
  const { dataHandler } = Globalcontext();
  const [name, setName] = useState("peter");
  const [lastName, setLastName] = useState("smith");
  const [password, setPassword] = useState("peter!2#3");
  const [email, setEmail] = useState("peter@gmail.com");
  const [location, setLocation] = useState("new city");

  const RegisterHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        { name, lastName, password, email, location },
        { withCredentials: true }
      );

      // console.log(data);

      if (data.success) {
        toast.success(data.message);
        navigate("/dashboard");
        dataHandler();
      } else {
        toast.error(data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-96  p-2 rounded-xl bg-gray-700 grid justify-center shadow-xl m-auto relative top-10 ">
        <div className="  w-full flex justify-center p-4 items-center  ">
          <article className=" w-10  rounded bg-pink-300 text-center text-3xl font-bold text-blue-900 cursor-pointer  ">
            <Link to="/">J</Link>
          </article>{" "}
          <h1 className="font-bold text-3xl mx-3 tracking-wider text-white">
            Jobify
          </h1>
        </div>
        <h1 className="text-2xl text-center">Register</h1>
        <form onSubmit={RegisterHandler}>
          <div>
            <div className="m-2 p-2">
              <input
                type="text"
                className="p-3 rounded-full "
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            {/*  */}
            <div className="m-2 p-2">
              <input
                type="text"
                className="p-3 rounded-full "
                placeholder="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            {/*  */}
            <div className="m-2 p-2">
              <input
                type="password"
                className="p-3 rounded-full "
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {/*  */}
            <div className="m-2 p-2">
              <input
                type="email"
                className="p-3 rounded-full "
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-2 p-2">
              <input
                type="text"
                value={location}
                className="p-3 rounded-full "
                placeholder="location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button className="btn w-[50%] m-2 text-center text-white">
                Register
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center m-2 items-center">
          <span className="text-blue-700">if already have an account? </span>
          <p className="text-center underline text-blue-700 px-1">
            <Link to="/login">login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
