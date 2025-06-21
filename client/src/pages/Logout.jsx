import React, { useState } from "react";
import { FaUserCircle, FaSortDown } from "react-icons/fa";
// import { useDashboardContext } from "../pages/DashboardLayout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Globalcontext } from "../components/ContextApi";

const Logout = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  // const { user } = useDashboardContext();
  const { userData ,profile} = Globalcontext();


  const LogoutHandler = async (e) => {
   axios.defaults.withCredentials = true;

    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/auth/logout",{credentials: 'include'}
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-[8rem] px-2 relative">
      <button
        className="w-full p-3 flex justify-around items-center bg-slate-400 text-white rounded-xl"
        onClick={() => setShowLogout(!showLogout)}
      >
      {profile
  ? <img src={`http://localhost:3000${profile}`} alt={profile} title={profile} className="w-5 h-5 rounded-full" />
  : <FaUserCircle className="w-5 h-5"  />
}

        {userData}
        <FaSortDown className="text-sm" />
      </button>

      {showLogout && (
        <ul className="absolute right-0 mt-3 mx-5 w-20 bg-pink-400 text-white rounded shadow-lg z-10">
          <li
            className="px-4 py-2 hover:bg-pink-600 cursor-pointer rounded"
            onClick={() => setShowLogout(false)}
          >
            <p onClick={LogoutHandler}>Logout</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Logout;
