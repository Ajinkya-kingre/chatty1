import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/register`,
        {
          username: user.username,
          email: user.email,
          password: user.password,
        }
      );
      console.log("request from server", response.data);

      if (response.status >= 200 && response.status < 300) {
        const token = response.data.token;

        toast.success(response.data.message);
        console.log("Register successful:", response.data);

        // Save the user to local storage
        localStorage.setItem("token", token);

        // Redirect to the chat page
        navigate("/login");
      } else {
        toast.success(response.data.message);
        console.log("there is error during registration", response.data);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
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
            onSubmit={handleSubmit}
            className="flex w-full flex-col space-y-5"
          >
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
            {/* Email addresss fieldds */}
            <label htmlFor="email" className="text-gray-400">
              Email:
            </label>
            <input
              className="w-full px-16 pl-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:border-2 focus:border-purple-800"
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your Email"
              id="email"
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

export default Register;
