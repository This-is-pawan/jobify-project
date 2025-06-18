import React, { useState } from "react";
import { useDashboardContext } from "./DashboardLayout";

const Profile = () => {
  
  const [file,setFile]=useState('.png')
  const [name,setName]=useState('peter')
  const [lastName, setLastName]=useState('smith')
  const [email,setEmail]=useState('peter@gmail.com')
  const [location,setLocation]=useState('new city')
const AddUserHandle=(e)=>{
    e.preventDefault();
    console.log({file,name,lastName,email,location});
    
}  

return (
    <div className="w-full min-h-screen flex items-start justify-center  px-4 py-10">
      <div className="w-full max-w-5xl  shadow-xl rounded-2xl p-4 bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800 ">Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div>
            <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-1">Select An Image File (Max 0.5 MB)</label>
            <input
              type="file"
              id=""
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter job position"
             
              onChange={(e)=>setFile(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="Name" className="block text-lg font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="Name"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter company name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter job location"
             value={lastName}
              onChange={(e)=> setLastName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter job location"
             value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-lg font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter job location"
              value={location}
              onChange={(e)=> setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300" onClick={AddUserHandle}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
