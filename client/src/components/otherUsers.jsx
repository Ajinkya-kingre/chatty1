import React from "react";
import Otheruser from "./Otheruser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  const { otherUsers } = useSelector((store) => store.user);

  // Fetch other users if they're not already available
  useGetOtherUsers();

  // If otherUsers is falsy, return null
  if (!otherUsers) return null;

  return (
    <div className="w-72 h-[500px] m-4 overflow-y-scroll flex-1">
      {otherUsers.map((user) => (
        <Otheruser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
