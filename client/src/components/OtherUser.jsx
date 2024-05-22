import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userslice";
const Otheruser = (props) => {
  const user = props.user;
  const dispatch = useDispatch();

  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = onlineUsers.includes(user._id);

  const selectedUserHandle = async (user) => {
    dispatch(setSelectedUser(user));
  };
  return (
    <>
      <div
        onClick={() => selectedUserHandle(user)}
        className={`${
          selectedUser?._id === user?._id
            ? "bg-zinc-200 text-black"
            : "text-white"
        }  w-64 h-16 ml-3 mb-4 flex bg-blue-800 gap-2 hover:text-black items-center hover:bg-zinc-200 rounded-xl  p-2 cursor-pointer`}
      >
        <div className="relative ">
          <img
            src={user.profilePhoto}
            alt="avtaar"
            className="w-10 h-10 rounded-full"
          />
          {isOnline && (
            <span
              className="top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"
              style={{ zIndex: 10 }} // Adjust the z-index to ensure it's above the avatar
            ></span>
          )}
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2 ">
            <p>{user?.username}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Otheruser;
