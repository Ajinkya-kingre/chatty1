import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userslice";
import messageReducer from "./messageSlice";
import socketReducer from "./socketSlice";
const store = configureStore({
  reducer: {
    user: useReducer,
    message: messageReducer,
    socket: socketReducer,
  },
});
export default store;
