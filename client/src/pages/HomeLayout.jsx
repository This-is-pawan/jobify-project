import React from 'react'
import { Outlet } from 'react-router-dom'
import { Globalcontext } from '../components/ContextApi'
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
const HomeLayout = () => {
  const {isDarkTheme,toggleDarkTheme}=Globalcontext()
  // console.log(isDarkTheme);
  
  return (
    <div className='w-full h-screen'>
   <div className='' onClick={toggleDarkTheme}>
      <Outlet/>
     
   </div>
    </div>
  )
}

export default HomeLayout
