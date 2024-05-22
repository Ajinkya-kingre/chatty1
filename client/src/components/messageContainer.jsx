import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { selectedUser } = useSelector((store) => store.user);
  return (
    <div className="md:w-[690px] m-4 rounded-xl bg-blue-950 flex flex-col">
      <div
        className={` m-3 h-16 items-center  rounded-xl flex bg-blue-800 gap-2 `}
      >
        <div className={`avatar online`}>
          <div className="w-12 rounded-full">
            <img src={selectedUser?.profilePhoto} alt="avtaar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2 ">
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
