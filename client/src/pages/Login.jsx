import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Globalcontext } from "../components/ContextApi";

const Login = () => {
  const navigate = useNavigate();
  const {  dataHandler } = Globalcontext();

  const [name, setName] = useState("peter");
  const [password, setPassword] = useState("peter!2#3");
  const [email, setEmail] = useState("peter@gmail.com");
  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://jobify-project-zxis.onrender.com/api/v1/auth/login",
        { name, password, email, location },
        { withCredentials: true }
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/dashboard");
        dataHandler();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-80  p-4 rounded-xl bg-gray-700 grid justify-center shadow-xl m-auto  relative top-10 ">
        <div className="  w-full flex justify-center p-4 items-center   ">
          <article className=" w-10 rounded bg-pink-300 text-center text-3xl font-bold text-blue-900 cursor-pointer  ">
            <Link to="/">J</Link>
          </article>{" "}
          <h1 className="font-bold text-3xl mx-3 tracking-wider text-white">
            Jobify
          </h1>
        </div>
        <h1 className="text-2xl text-center">Login</h1>
        <form onSubmit={LoginHandler}>
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
                type="email"
                className="p-3 rounded-full "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            {/*  */}
            <div className="m-2 p-2">
              <input
                type="password"
                className="p-3 rounded-full "
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex justify-center">
              <button className="btn w-[50%] m-2 text-white">Login</button>
            </div>
          </div>
        </form>
        <div className="flex justify-center m-2 items-center">
          <span className="text-blue-700">Create an account 🠚</span>
          <p className="text-center underline text-blue-700 px-3">
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
