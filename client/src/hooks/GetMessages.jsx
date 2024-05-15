import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserGetMessages = () => {
  const { SelectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    console.log("SelectedUser:", SelectedUser);
    console.log("_id:", SelectedUser?._id);

    const FetchMessages = async () => {
      try {
        const req = await axios.get(
          `http://localhost:8000/api/message/${SelectedUser?._id}`
        );
        console.log(req);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    FetchMessages();
  }, [SelectedUser]); // Add SelectedUser as a dependency to useEffect

  return null; // Component must return some JSX, can return null if it doesn't render anything
};

export default UserGetMessages;
