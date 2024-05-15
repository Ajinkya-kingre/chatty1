import React from "react";
import { FaSignOutAlt, FaUser, FaCog, FaAddressBook } from "react-icons/fa";

const SidebarLeft = ({ username }) => {
  const displayedUsername = username || "Guest";
  return (
    <div>
      <div className="flex w-44 md:w-60 m-4 md:m-[6] sm:h-[490px] md:h-[95vh] flex-col items-center rounded-2xl bg-secondary justify-between flex-grow">
        {/* User Profile */}
        <div className="flex gap-2 relative right-2  items-center mt-5">
          <img
            src="person.jpg" // Replace with user profile image URL
            alt="Profile"
            className="w-7 h-7  rounded-full"
          />
          <p className="text-2xl text-white font-semibold">
            hi, <span>{displayedUsername}</span>
          </p>
        </div>

        <div className="flex bottom-36 relative right-7  flex-col  items-center space-y-9">
          <div className="gap-2 sidebar-icon items-center flex  justify-center">
            <FaUser className="text-primary text-xl hover:cursor-pointer" />
            <span className="text-xl text-white mt-1">Profile</span>
          </div>
          <div className="gap-2 sidebar-icon flex items-center justify-center">
            <FaCog className="text-primary text-xl hover:cursor-pointer" />
            <span className="text-xl text-white mt-1">setting</span>
          </div>
          <div className="gap-2 sidebar-icon flex items-center justify-center">
            <FaAddressBook className="text-primary text-xl hover:cursor-pointer" />
            <span className="text-xl text-white mt-1">Contact</span>
          </div>
        </div>
        <div className="gap-2 relative right-7  bottom-6 flex items-center justify-center">
          <FaSignOutAlt className="text-primary text-xl hover:cursor-pointer" />
          <span className="text-xl text-white mt-1">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
