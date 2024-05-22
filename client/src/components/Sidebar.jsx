import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./otherUsers";

const Sidebar = () => {
  const [search, setSearch] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    alert(search);
  };
  return (
    <div className=" m-4 rounded-xl bg-blue-950 ">
      <form
        onSubmit={SubmitHandler}
        action=""
        className="flex mb-10 m-4 rounded-xl items-center gap-2"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input w-72 h-10 input-bordered rounded-lg"
          type="text"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="btn rounded-full w-10 h-10  bg-blue-800 text-white"
        >
          <BiSearchAlt2 className="w-9 h-9 rounded-full outline-none" />
        </button>
      </form>
      <div className="divider text-black px-3">
        <OtherUsers className="text-white mr-10" />
      </div>
    </div>
  );
};

export default Sidebar;
