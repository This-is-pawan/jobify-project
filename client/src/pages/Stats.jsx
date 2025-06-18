import React from 'react'
import { FcBriefcase } from "react-icons/fc";
import { FaPastafarianism,FaCalendarCheck  } from "react-icons/fa";

const Stats = () => {
  return (
    <div className='w-full h-screen' >
     <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 place-items-center max-sm:grid-cols-1">

        <div className='m-4 w-[90%]'>
         <div className=" w-full  bg-pink-900 p-10 grid grid-cols-2 place-items-center  gap-8 border-b-4 border-orange-500 rounded-lg ">
         <p className='text-6xl text-orange-500 font-bold'>2</p>
         <p className='bg-white p-1 text-5xl m-auto rounded-md'><FcBriefcase/></p>
         <p className='w-full text-xl tracking-wider  text-white text-nowrap'>Pending Applications</p>
         </div>
        </div>
        {/*  */}
        <div className='m-4 w-[90%]'>
         <div className=" w-full  bg-pink-900 p-10 grid grid-cols-2 gap-6 rounded-lg   place-items-center border-b-4 border-blue-500">
         <p className='text-6xl text-blue-500 font-bold'>0</p>
         <p className='bg-white p-1 text-5xl m-auto rounded-md'><FaCalendarCheck className='text-blue-500' /></p>
         <p className='w-full text-xl tracking-wider  text-white text-nowrap'>Interviews Scheduled</p>
         </div>
         </div>
         {/*  */}
         <div className='m-4 w-[90%] '>
         <div className=" w-full   bg-pink-900 p-10 grid grid-cols-2 gap-6 rounded-lg  place-items-center border-b-4 border-gray-500">
         <p className='text-6xl text-gray-500 font-bold'>0</p>
         <p className='bg-white p-1 text-5xl m-auto rounded-md'><FaPastafarianism className='text-gray-500'/></p>
         <p className='w-full text-xl tracking-wider  text-white text-nowrap'>Jobs Declined</p>
         </div>
         </div>
         {/*  */}
          
         {/*  */}
         
      </div>
    </div>
  )
}

export default Stats