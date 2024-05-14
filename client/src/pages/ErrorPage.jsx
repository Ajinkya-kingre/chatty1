import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-400 text-transparent  bg-clip-text">
        404
      </h1>
      <p className="text-lg mb-4">
        Sorry, the page you're looking for does not exist.
      </p>
      <p className="text-lg w-4/5 mb-4">
        Oops! It looks like the page you're trying to access doesn't exist.
        Maybe it was moved or deleted, or you mistyped the URL. Please
        double-check the URL or go back to the homepage to find what you're
        looking for.
      </p>
      <Link to="/" className="text-lg text-purple-600 underline">
        Go to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
