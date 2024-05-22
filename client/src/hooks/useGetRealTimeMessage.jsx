// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessages } from "../redux/messageSlice";

// const useGetRealTimeMessage = () => {
//   const { socket } = useSelector((store) => store.socket);
//   const { messages } = useSelector((store) => store.message);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     socket?.on("newMessage", (newMessage) => {
//       dispatch(setMessages([...messages, newMessage]));
//     });

//     // Cleanup the event listener when component unmounts
//     return () => {
//       socket?.off("newMessage");
//     };
//   }, [socket, dispatch, setMessages, messages]);

//   // It's conventional to return something from a custom hook,
//   // but it's optional based on your use case.
//   return null;
// };

// export default useGetRealTimeMessage;
