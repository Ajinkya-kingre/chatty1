import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetOtherUser } from "../redux/userslice";

const GetOtherUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/auth/other_users`
        );
        //store
        dispatch(SetOtherUser(res.data));
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUser();
  }, []);
};

export default GetOtherUser;
