import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="pl-7 justify-between absolute m-4 right-[52px] w-[76%] rounded-lg h-16 flex bg-gray-500">
        {/* Left nav */}
        <div className="flex justify-center items-center">
          <h1 className="text-center font-bold  font- text-white">ChatApp</h1>
        </div>
        {/* Right nav */}
        <div className="flex mr-8 items-center space-x-2">
          <button className="text-sm mr-4 text-white bg-primary px-3 py-2 rounded-md">
            New Chat
          </button>
          <div className="relative">
            <img
              src="person.jpg"
              alt="User"
              className="w-8 h-8 rounded-full mr-2"
            />
          </div>
          <div>
            <p className="text-sm text-white font-semibold">Aftab</p>
            <p className="text-xs text-white">Online</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
