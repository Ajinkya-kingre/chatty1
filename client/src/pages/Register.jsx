import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import { useAuth } from "../store";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/auth/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="flex h-screen">
      {/* Left side with gradient background */}
      <div className="md:w-7/10 lg:w-3/5 w-full bg-gradient-to-r from-purple-700 to-black via-blue-700">
        <div className="flex items-center justify-center h-full px-16 text-white">
          <div className="flex items-center h-full px-16">
            <div className="flex flex-col space-y-4">
              <h1 className="text-5xl font-bold font-display tracking-widest leading-tight text-white">
                Join the ChatApp Community!
              </h1>
              <p className="text-xl font-light text-white">
                Sign up for an account to connect with friends, family, and
                colleagues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with registration form */}
      <div className="md:w-3/10 lg:w-2/5 w-4/5 bg-gray-900 text-white flex items-center justify-center">
        <div className="flex mr-20 flex-col space-y-4">
          <h2 className="text-2xl font-bold text-center">
            Create Your Account
          </h2>
          <form
            onSubmit={onSubmitHandler}
            className="flex w-full flex-col space-y-3"
          >
            {/* fullName fieldsd */}
            <label htmlFor="fullName" className="text-gray-400">
              fullName:
            </label>
            <input
              className="w-full px-16 pl-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:border-2 focus:border-purple-800"
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              placeholder="fullName"
              id="fullName"
              required
            />
            {/* Username fieldsd */}
            <label htmlFor="username" className="text-gray-400">
              Username:
            </label>
            <input
              className="w-full px-16 pl-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:border-2 focus:border-purple-800"
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Username"
              id="username"
              required
            />
            {/* Password dfield*/}
            <label htmlFor="password" className="text-gray-400">
              Password:
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:border-2 focus:border-purple-800 mt-4"
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              id="password"
              required
            />
            {/* ConfirmPassword dfield*/}
            <label htmlFor="ConfirmPassword" className="text-gray-400">
              Password:
            </label>
            <input
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:border-2 focus:border-purple-800 mt-4"
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              id="confirmPassword"
              required
            />
            <div className="flex items-center my-4">
              <div className="flex items-center">
                <p>Male</p>
                <input
                  type="checkbox"
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}
                  defaultChecked
                  className="checkbox mx-2"
                />
              </div>
              <div className="flex items-center">
                <p>Female</p>
                <input
                  type="checkbox"
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  defaultChecked
                  className="checkbox mx-2"
                />
              </div>
            </div>
            <button
              className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-700 mt-4"
              type="submit"
            >
              Register
            </button>
            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link className="text-blue-500 underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
