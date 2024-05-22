import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetmessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8000/api/message/${selectedUser?._id}`
        );

        console.log("response from getmesg", res);
        dispatch(setMessages(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedUser) {
      // Check if selectedUser is truthy before fetching messages
      fetchMessages();
    }
  }, [dispatch, selectedUser]); // Include selectedUser in the dependency array
};

export default useGetmessages;
