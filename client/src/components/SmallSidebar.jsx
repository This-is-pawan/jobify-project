import React from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import links from '../utils/Links';

const SmallSidebar = () => {
  const { toggleSideBar, showSidebar } = useDashboardContext();

  return (
    <div className="w-full">
      {/* Overlay and Sidebar Container */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleSideBar}
        ></div>

        {/* Sidebar */}
        <aside className="relative w-3/4 max-w-xs h-full bg-white p-6 shadow-lg z-50">
          {/* Close Button */}
          <button onClick={toggleSideBar} className="text-3xl mb-6 text-red-600">
            <FaTimes />
          </button>

          {/* Logo */}
          <div className="flex items-center mb-6">
            <article className="w-10 h-10 flex items-center justify-center bg-pink-300 text-blue-900 font-bold rounded text-2xl">
              <Link to="/" onClick={toggleSideBar}>J</Link>
            </article>
            <h1 className="text-3xl font-bold ml-4 text-pink-600">Jobify</h1>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-4">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-xl p-2 rounded hover:bg-gray-100 transition ${
                    isActive ? 'text-pink-600 font-semibold' : 'text-gray-700'
                  }`
                }
              >
                <span className="text-2xl">{link.icon}</span>
                <span>{link.text}</span>
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default SmallSidebar;
