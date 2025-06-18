import React, { createContext, useContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BigSidebar, SmallSidebar, Navbar } from '../components';
import axios from 'axios';
import { toast } from 'react-toastify';

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('dark_theme') === 'true';
  });
  const [getjob, setGetjob] = useState(null);

  useEffect(() => {
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

  const Getdatajob = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/v1/jobs');
      if (data.success) {
        setGetjob(data);
        toast.success(data.message);
      } else {
        setGetjob(null);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
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
        Getdatajob,
        getjob,
        setGetjob,
      }}
    >
      <div className="w-full  flex  transition-all duration-500">
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

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
