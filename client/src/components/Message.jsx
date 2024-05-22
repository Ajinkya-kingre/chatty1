import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const { authUser, selectedUser } = useSelector((store) => store.user);
  const scroll = useRef();
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={scroll}
      className={`chat ${
        message?.senderId === authUser?._id ? "chat-end" : "chat-start"
      }`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full overflow-hidden">
          {" "}
          {/* Added overflow-hidden and rounded-full */}
          <img
            alt="Tailwind CSS chat bubble component"
            className="rounded-full"
            src={`${
              message.senderId === authUser?._id
                ? authUser?.profilePhoto
                : selectedUser?.profilePhoto
            }`}
          />
        </div>
      </div>
      <div className="chat-header text-gray-300  p-2 rounded-lg">
        {`${
          message.senderId === authUser?._id
            ? authUser?.username
            : selectedUser?.username
        }`}
        <time className="text-xs ml-2 text-gray-300 opacity-50">
          {" "}
          {/* {`${
            message.senderId === authUser?._id
              ? authUser?.createdAt
              : selectedUser?.createdAt
          }`} */}
        </time>
      </div>
      <div
        className={`chat-bubble w-[100%] p-2 rounded-lg ${
          authUser?._id === message?.senderId ? "bg-blue-500" : "bg-blue-900"
        } text-gray-300`}
      >
        {message?.message}
      </div>
      <div className="chat-footer text-cyan-200 opacity-50">Delivered</div>
    </div>
  );
};

export default Message;
