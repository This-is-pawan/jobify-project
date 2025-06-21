import React, { useState } from "react";
import { Globalcontext } from "../components/ContextApi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  
  const {profileData,Profiledata}=Globalcontext()
 
   const Name=profileData?.userData?.name
   const Email=profileData?.userData?.email
  const navigate=useNavigate()
  const [file, setFile] = useState("");
  const [name, setName] = useState(Name);
  const [lastName, setLastName] = useState("smith");
  const [email, setEmail] = useState(Email);
  const [location, setLocation] = useState("new city");
 const AddUserHandle = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("photo", file); // field name should match your backend multer field (e.g., 'photo')
  formData.append("name", name);
  formData.append("lastName", lastName);
  formData.append("email", email);
  formData.append("location", location);

  try {
    const { data } = await axios.post(
      `http://localhost:3000/profile-upload`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data", // Very important for file upload
        },
      }
    );

    if (data.success) {
      toast.success(data.message || "Upload successful!");
      navigate('/dashboard')
      Profiledata()
    } else {
      toast.error(data.message || "Something went wrong!");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Upload failed");
    console.error(error);
  }
};

  return (
    <div className="w-full min-h-screen flex items-start justify-center  px-4 py-10">
      <div className="w-full max-w-5xl  shadow-xl rounded-2xl p-4 bg-white xl:relative top-[6rem]">
        <h1 className="text-4xl font-bold text-center text-gray-800 ">
          Profile
        </h1>

        <form encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div>
              <label
                htmlFor="file"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Select An Image File (Max 0.5 MB)
              </label>
              <input
                type="file"
                id=""
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter job position"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div>
              <label
                htmlFor="Name"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter company name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter job location"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter job location"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter job location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="mt-10 flex justify-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            onClick={AddUserHandle}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
