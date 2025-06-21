import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let CreateContext = createContext();

export let Globalcontext = () => useContext(CreateContext);

const ContextApi = ({ children }) => {
  const [userData, setUserData] = useState("user");
const [getjob, setGetjob] = useState();
const [profileData, setProfileData] = useState();
const [profile, setProfile] = useState('');
// console.log(profile);
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
    Profiledata()
    dataHandler();
  }, []);
  const dataHandler = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/user/data", {
        withCredentials: true,
      });
      // console.log(data);
      

      const user = data?.userData?.name;
      

      if (data.success) {
        setUserData(user);
        setProfileData(data)
      } else {
        setUserData("");
      }
    } catch (error) {
      toast.error(error);
    }
  };

const Profiledata = async () => {
  axios.defaults.withCredentials=true
  try {
    const { data } = await axios.get('http://localhost:3000/api/user/profile-data', {
      withCredentials: true, 
    });
// console.log(data);

    if (data.success) {
      setProfile(data?.user?.photo)
      toast.success(data.message);
    } else {
      
      toast.error(data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};





  return (
    <div>
      <CreateContext
        CreateContext
        value={{ userData, setUserData, dataHandler ,isDarkTheme,setIsDarkTheme,toggleDarkTheme,getjob,setGetjob,profileData,Profiledata,profile}}
      >
        {children}
      </CreateContext>
    </div>
  );
};

export default ContextApi;
