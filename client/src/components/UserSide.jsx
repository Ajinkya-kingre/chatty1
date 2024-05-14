import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import "../components/slidebar.css";
import SlideGroup from "./SlideGroup";
import OtherUser from "./OtherUser";

const UserSide = () => {
  // State to keep track of new messages
  const [newMessages, setNewMessages] = useState(0);

  const simulateNewMessages = () => {
    setNewMessages(newMessages + 1);
  };

  return (
    <div className="flex rounded-2xl mt-24 flex-col sm:h-[408px] md:h-[408px] w-72 bg-gray-900 text-white">
      {/* Inbox Header */}
      <div className="px-5 py-2  flex items-center justify-between border-b border-gray-700">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <div className="text-sm w-[50px] flex items-center justify-center h-6 bg-red-600 rounded-md text-gray-400">
          <span className="mr-1 text-white">New</span>
          <span className="text-white">{newMessages}</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <input
            className="input w-full h-8 input-border rounded-full pl-8 text-primary-placeholder"
            placeholder="Search..."
            type="text"
          />
          <FaSearch className="absolute left-2 top-2 text-primary" />
        </div>
      </div>
      {/* Group users  */}
      <SlideGroup />
      {/* Users from other user component */}
      <OtherUser />
    </div>
  );
};

export default UserSide;
