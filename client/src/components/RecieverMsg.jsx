import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ReceivedMsg = () => {
  const [getMessages, setGetMessages] = useState([]);
  const { SelectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8000/api/message/${SelectedUser._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Response from getMessage API:", response);
        setGetMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (SelectedUser) {
      fetchMessages();
    } else {
      setGetMessages([]); // Clear getMessages when no user is selected
    }
  }, [SelectedUser]);

  return (
    <>
      {getMessages.length > 0 ? (
        getMessages.map((message, index) => (
          <div
            key={index}
            className="flex w-[50%] relative mb-6 left-[8%] items-start gap-2"
          >
            {/* Render each message dynamically */}
            <img
              className="w-6 h-6 rounded-full"
              src={message.senderImage}
              alt="Sender's image"
            />
            <div className="flex flex-col gap-1 w-full max-w-[240px]">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <span className="text-xs font-semibold text-gray-900 dark:text-white">
                  {message.senderId}
                </span>
                <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  {message.timestamps}
                </span>
              </div>
              <div className="flex flex-col leading-1.5 p-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <p className="text-xs font-normal text-gray-900 dark:text-white">
                  {message.message}
                </p>
              </div>
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                {message.status}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>Loading messages...</p>
      )}
    </>
  );
};

export default ReceivedMsg;
