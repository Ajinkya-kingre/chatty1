import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthUser } from "../redux/userslice";
import { useDispatch } from "react-redux";
const SideHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandel = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/auth/logout`);
      console.log(res);
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-2 rounded-xl bg-blue-950">
      <div className="flex flex-col p-4 items-center justify-between">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="list-none">
          <li className="my-2">
            <p className="text-white hover:bg-blue-800 my-11 py-2 px-4 rounded-full cursor-pointer">
              Home
            </p>
          </li>
          <li className="my-2">
            <p className="text-white hover:bg-blue-800 my-11 py-2 px-4 rounded-full cursor-pointer">
              Inbox
            </p>
          </li>
          <li className="my-2">
            <p className="text-white hover:bg-blue-800 my-11 py-2 px-4 rounded-full cursor-pointer">
              Messages
            </p>
          </li>
          <li className="my-2">
            <p
              onClick={logoutHandel}
              className="text-white hover:bg-blue-800 my-11 py-2 px-4 rounded-full cursor-pointer"
            >
              Logout
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideHeader;
