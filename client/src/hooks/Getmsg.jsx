import Axios from "axios";
import React, { useEffect } from "react";

const Getmsg = () => {
  useEffect(() => {
    try {
      const getMessage = async () => {
        const req = await Axios.get("/send/:id");
        console.log(req);
      };
    } catch (error) {
      console.log(req);
    }
    getMessage();
  }, []);
};

export default Getmsg;
