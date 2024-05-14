import React from "react";
import GetOtherUser from "../hooks/GetOtherUser";

const OtherUser = () => {
  // Sample list of users
  const users = [
    { name: "Nahida", online: true },
    { name: "aisha", online: false },
    { name: "Rudius", online: true },
    { name: "Eris", online: true },
    { name: "Ajinkya", online: true },
    { name: "Sukuna", online: true },
    { name: "Faruzan", online: true },
    { name: "Nilou", online: true },
  ];

  GetOtherUser();

  const handleSelectedUser = (users) => {};
  return (
    <>
      {" "}
      {/* Other users */}
      <div className="flex overflow-y-scroll flex-col space-y-2">
        {users.map((user, index) => (
          <div
            key={index}
            onClick={() => handleSelectedUser(users)}
            className="flex mx-3 items-center justify-between px-4 py-2 hover:bg-slate-700 rounded-md cursor-pointer transition-colors duration-100 ease-in"
          >
            <div className="flex items-center">
              <div className="relative">
                <img
                  src="person.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-2"
                />
                {user.online && (
                  <div className="top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                )}
              </div>
              <span>{user.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OtherUser;
