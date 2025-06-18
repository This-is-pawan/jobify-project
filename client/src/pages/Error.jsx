import React from 'react'
import img from '../assets/undraw_page-not-found_6wni.svg'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <img src={img} alt="Page not found" className='w-[80%] sm:w-[50%]' />
      <h4 className='text-white text-xl mt-4 font-thin leading-10 tracking-wider'>Oops! page not found</h4>
      <p className='font-thin leading-10 tracking-wider '>we can't seem to find the page you are looking for</p>
      <button className="mt-9  text-blue-900 hover:text-white"><Link to='/'> ←  Back to Home</Link></button>
    </div>
  )
}

export default Error
