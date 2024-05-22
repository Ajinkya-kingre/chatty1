import React from "react";
import Sidebar from "../components/Sidebar";
import MessageContainer from "../components/messageContainer";
import SideHeader from "../components/SideHeader";

const Home = () => {
  return (
    <div className="flex  flex-row sm:h-[690px] md:h-[690px] rounded-xl overflow-hidden bg-gray-700 ">
      <SideHeader />
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
