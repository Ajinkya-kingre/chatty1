import React from "react";

import SendMsg from "./SendMsg,";
import ReceivedMsg from "./RecieverMsg";
import MsgInput from "./MsgInput";

const MsgContainer = () => {
  return (
    <div className="w-[58%] max-w-[100%] rounded-lg  h-[84vh] relative left-4  flex justify-center items-center mt-24 bg-gray-800">
      <div className="flex flex-col w-full bg-gray-800">
        <div className="h-[290px] relative top-4 overflow-y-scroll">
          <ReceivedMsg /> {/* Receive msg */}
          <SendMsg /> {/* Send msg */}
          <SendMsg />
          <ReceivedMsg />
        </div>
        <MsgInput /> {/* Message input */}
      </div>
    </div>
  );
};

export default MsgContainer;
