import React from "react";
import { Bounce, Flip, Slide, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Login,
  Landing,
  Register,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJob,
  Profile,
  Admin,
  EditJob,
} from "./pages/index";
import Logout from "./pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJob />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
           {
      path: "edit-job/:id", 
      element: <EditJob />,
    },
        ],
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="">
      <ToastContainer
        autoClose={2000}
        position="top-center"
        transition={Bounce}
      />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
