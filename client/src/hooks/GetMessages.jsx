// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

// const ReceivedMsgs = () => {
//   const { SelectedUser } = useSelector((store) => store.user);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         axios.defaults.withCredentials = true;
//         const response = await axios.get(
//           `http://localhost:8000/api/message/${SelectedUser?._id}`
//         );
//         console.log(response.data); // Assuming the response contains message data
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };

//     if (SelectedUser) {
//       fetchMessages();
//     }
//   }, [SelectedUser]);

//   return (
//     // JSX to render received messages
//     // You can map through the messages data fetched and render each message
//     <div className="flex w-[50%]  relative mb-6 left-[8%] items-start gap-2">
//       {/* Render messages here */}
//     </div>
//   );
// };

// export default ReceivedMsgs;
