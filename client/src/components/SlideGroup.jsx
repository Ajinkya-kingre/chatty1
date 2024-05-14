import React from "react";

const SlideGroup = () => {
  return (
    <div className="inline-flex mb-2 content-center justify-center rounded-md shadow-sm">
      <a
        href="#"
        aria-current="page"
        className="px-4 py-2 text-sm font-medium text-blue-700 bg-white  border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Primary
      </a>
      <a
        href="#"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white -t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Groups
      </a>
      <a
        href="#"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white  border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Messages
      </a>
    </div>
  );
};

export default SlideGroup;
