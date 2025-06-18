import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let CreateContext = createContext();

export let Globalcontext = () => useContext(CreateContext);

const ContextApi = ({ children }) => {
  const [userData, setUserData] = useState("user");
const [getjob, setGetjob] = useState();
// console.log(getjob);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('Home_dark_theme') === 'true';
  });
  useEffect(() => {
      document.body.classList.toggle('Home_dark_theme', isDarkTheme);
    }, [isDarkTheme]);
  
    const toggleDarkTheme = () => {
      const newDarkTheme = !isDarkTheme;
      setIsDarkTheme(newDarkTheme);
      localStorage.setItem('Home_dark_theme', newDarkTheme);
      document.body.classList.toggle('Home_dark_theme', newDarkTheme);
    };
  
  useEffect(() => {
    
    dataHandler();
  }, []);
  const dataHandler = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/user/data", {
        withCredentials: true,
      });

      const user = data?.userData?.name;
      // console.log(user);

      if (data.success) {
        setUserData(user);
      } else {
        setUserData("");
      }
    } catch (error) {
      toast.error(error);
    }
  };

// const Getdatajob = async () => {
//   try {
//     const { data } = await axios.get('http://localhost:4000/api/v1/jobs', {
//       withCredentials: true, // 👈 this is necessary for cookies to be sent
//     });

//     if (data.success) {
//       setGetjob(data.data);
//       toast.success(data.message);
//     } else {
//       setGetjob(null);
//       toast.error(data.message);
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error?.response?.data?.message || "Something went wrong");
//   }
// };





  return (
    <div>
      <CreateContext
        CreateContext
        value={{ userData, setUserData, dataHandler ,isDarkTheme,setIsDarkTheme,toggleDarkTheme,getjob,setGetjob}}
      >
        {children}
      </CreateContext>
    </div>
  );
};

export default ContextApi;
