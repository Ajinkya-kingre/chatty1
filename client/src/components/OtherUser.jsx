import React, { useEffect, useState } from "react";
import axios from "axios";
import { SetSelectedUser } from "../redux/userslice";
import { useDispatch, useSelector } from "react-redux";

const OtherUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `http://localhost:8000/api/auth/other_users`,
          config
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };
    fetchUsers();
  }, []);
  const dispatch = useDispatch();
  const { SelectedUser } = useSelector((store) => store.user);

  const selectedUserHandler = (userId) => {
    console.log("Selected user ID:", userId);
    // Dispatch an action to set the selected user ID
    dispatch(SetSelectedUser(userId));
  };

  return (
    <div className="flex overflow-y-scroll flex-col space-y-2">
      {users.map((user) => (
        <div
          key={user._id}
          onClick={() => selectedUserHandler(user)}
          className={`
          ${
            SelectedUser && SelectedUser._id === user._id
              ? "bg-slate-700"
              : "hover:bg-slate-700 duration-100 ease-in"
          }
          flex mx-3 items-center justify-between px-4 py-2 hover:bg-slate-700 rounded-md cursor-pointer transition-colors duration-100 ease-in`}
        >
          <div className="flex items-center">
            <div className="relative">
              <img
                src="person.jpg"
                alt="User"
                className="w-10 h-10 rounded-full mr-2"
              />
              {user.status === 200 && (
                <div className="top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
              )}
            </div>
            <span>{user.username}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherUser;
