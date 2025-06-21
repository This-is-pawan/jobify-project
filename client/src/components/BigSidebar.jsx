import React from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Link, useLocation } from 'react-router-dom';
import links from '../utils/Links';

const BigSidebar = () => {
  const { showSidebar,isDarkTheme } = useDashboardContext();
  const location = useLocation();

  return (
    <div
      className={` h-full ${isDarkTheme?"bg-gray-700":"bg-pink-50"}  transition-all duration-300 ${
        showSidebar ? 'w-64' : 'w-0 overflow-hidden'
      }`}
    >
      <div className="pt-20">
        {links.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              to={link.path}
              key={index}
              className={`flex items-center px-6 py-3 transition-colors duration-200 hover:bg-gray-700 ${
                isActive ? 'bg-gray-700' : ''
              }`}
            >
              <span className="mr-4 text-xl">{link.icon}</span>
              <span>{link.text}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BigSidebar;
