import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextApi from "./components/ContextApi.jsx";

// import customFetch from './utils/CustomFetch.jsx'

// const connect = async () => {
//   try {
//     const res = await customFetch.get('/proxy');
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// connect();

createRoot(document.getElementById("root")).render(
  <ContextApi>
    
      <App />
   
    
  </ContextApi>
);
