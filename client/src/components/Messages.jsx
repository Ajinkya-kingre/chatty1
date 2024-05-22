import React from "react";
import Message from "./Message";
import useGetmessages from "../hooks/useGetmessages";
import { useSelector } from "react-redux";

const Messages = () => {
  useGetmessages();
  const { messages } = useSelector((store) => store.message);
  if (!messages) return;
  return (
    <div className="px-4 flex-1 overflow-y-scroll">
      {messages &&
        messages?.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
    </div>
  );
};

export default Messages;
