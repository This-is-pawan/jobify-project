import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let CreateContext = createContext();

export let Globalcontext = () => useContext(CreateContext);

const ContextApi = ({ children }) => {
  const [userData, setUserData] = useState("user");

  useEffect(() => {
     
    dataHandler();
  }, []);
  const dataHandler = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/user/data", {
        withCredentials: true,
      });

      const user = data?.userData?.name;
      console.log(user);

      if (data.success) {
        setUserData(user);
      } else {
        setUserData("");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <CreateContext
        CreateContext
        value={{ userData, setUserData, dataHandler }}
      >
        {children}
      </CreateContext>
    </div>
  );
};

export default ContextApi;
