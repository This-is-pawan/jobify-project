import React from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
const ThemeToggle = () => {
 const {isDarkTheme,toggleDarkTheme}=useDashboardContext()
 // console.log(isDarkTheme);

  return (
    <div>
     <div className=' cursor-pointer mx-10  transition-all duration-700'  onClick={toggleDarkTheme}>
      {isDarkTheme ? (<IoIosSunny />): (<IoMoon  />)}
     </div>
    </div>
  )
}

export default ThemeToggle