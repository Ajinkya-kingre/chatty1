import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userslice";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      console.log(response);
      dispatch(setAuthUser(response.data));
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred");
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex h-screen">
      {/* Left side with gradient background */}
      <div className="md:w-7/10 lg:w-3/5 w-full bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <div className="flex items-center justify-center h-full px-16 text-white">
          <div className="flex items-center h-full px-16">
            <div className="flex flex-col space-y-4">
              <h1 className="text-5xl font-bold font-display tracking-widest leading-tight text-white-500">
                ChatApp Adventure Awaits!
              </h1>
              <p className="text-xl font-light text-white">
                Connect with friends, family, and colleagues – seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="md:w-3/10 lg:w-2/5 w-4/5 bg-gray-900 text-white flex items-center justify-center">
        <div className="flex mr-20  flex-col space-y-4">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col space-y-6"
          >
            <label htmlFor="username" className="text-gray-400 ">
              username:
            </label>
            <input
              className="w-full px-16 pl-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:border-2 focus:border-purple-800"
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
            <label htmlFor="password" className="text-gray-400">
              Password:
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:border-2  focus:border-purple-800 mt-4"
              type="password"
              placeholder="Password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <button
              className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-700 mt-4"
              type="submit"
            >
              Login
            </button>
            <p className="text-center text-gray-400">
              New to ChatApp?{" "}
              <Link className="text-blue-500 underline" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
