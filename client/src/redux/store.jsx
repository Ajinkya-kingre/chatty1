import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userslice";
const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
export default store;
