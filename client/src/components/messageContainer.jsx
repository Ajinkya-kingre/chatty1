import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = selectedUser && onlineUsers.includes(selectedUser._id);

  if (!selectedUser) {
    return (
      <div className="md:w-[690px] m-4 rounded-xl bg-blue-950 flex flex-col items-center justify-center">
        <p className="text-white">Please select a user to start chatting</p>
      </div>
    );
  }

  return (
    <div className="md:w-[690px] m-4 rounded-xl bg-blue-950 flex flex-col">
      <div
        className={`m-3 h-16 items-center rounded-xl flex bg-blue-800 gap-2`}
      >
        <div className={`avatar online`}>
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full"
              src={selectedUser?.profilePhoto}
              alt="avatar"
            />
            {isOnline && (
              <span
                className="top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"
                style={{ zIndex: 10 }} // Adjust the z-index to ensure it's above the avatar
              ></span>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-white">{selectedUser?.username}</p>
          </div>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
};

export default MessageContainer;
