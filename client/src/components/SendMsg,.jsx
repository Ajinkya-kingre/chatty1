import React from "react";

const ReceivedMsg = () => {
  return (
    <div>
      <div className="flex w-64 relative mb-6 left-72  items-start gap-2">
        <img
          className="w-6 h-6 rounded-full"
          src="person.jpg"
          alt="Sender's image"
        />
        <div className="flex flex-col gap-1 w-full max-w-[240px]">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <span className="text-xs font-semibold text-gray-900 dark:text-white">
              aftab
            </span>
            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-xs font-normal text-gray-900 dark:text-white">
              That's awesome. I think our users will really appreciate the
              improvements. That's awesome. I think our users will really
              appreciate the improvements. That's awesome. I think our users
              will really appreciate the improvements.
            </p>
          </div>
          <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          data-dropdown-placement="bottom-start"
          className="inline-flex self-center items-center p-1 text-xs font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-3 h-3 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
        <div
          id="dropdownDots"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-xs text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Reply
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Forward
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Copy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Report
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMsg;
