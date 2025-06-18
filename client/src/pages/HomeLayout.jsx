import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className='w-full h-screen'>
      {/* <nav>navbar</nav> */}
        <Outlet/>
    </div>
  )
}

export default HomeLayout
