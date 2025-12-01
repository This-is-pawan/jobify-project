import React, { createContext, useContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BigSidebar, SmallSidebar, Navbar } from '../components';
import { toast } from "react-toastify";
import axios from 'axios';
const DashboardContext = createContext();

const DashboardLayout = () => {

  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('dark_theme') === 'true';
  });
  const [getjob, setGetjob] = useState([]);
  useEffect(() => {
    Getdatajob()
    document.body.classList.toggle('dark_theme', isDarkTheme);
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('dark_theme', newDarkTheme);
    document.body.classList.toggle('dark_theme', newDarkTheme);
  };

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  // delete
 
  // 
const Getdatajob = async () => {
  axios.defaults.withCredentials=true
  try {
    const { data } = await axios.get('https://jobify-project-zxis.onrender.com/api/v1/jobs",/api/v1/jobs', {
      withCredentials: true, 
    },
    
  );


    if (data.success) {
      setGetjob(data.AllJobs);
   
      // toast.success(data.message);
    } else {
      setGetjob(null);
      toast.error(data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};
  return (
    <DashboardContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        toggleDarkTheme,
        showSidebar,
        toggleSideBar,
        user,
        getjob,
        setGetjob,
        Getdatajob 
      }}
    >
      <div className="w-full h-screen flex  transition-all duration-500">
        {/* Sidebar Section */}
        <aside className="hidden xl:block">
          <BigSidebar />
        </aside>
        <aside className="xl:hidden">
          <SmallSidebar />
        </aside>

        {/* Main Section */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <Navbar />
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
