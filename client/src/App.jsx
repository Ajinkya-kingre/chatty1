import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/userslice";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  useEffect(() => {
    if (authUser) {
      console.log("Attempting to connect to Socket.IO server");
      const socket = io("http://localhost:8000", {
        query: {
          userId: authUser._id,
        },
      });
      dispatch(setSocket(socket));
      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Routes />
      </div>
    </RouterProvider>
  );
}

export default App;
