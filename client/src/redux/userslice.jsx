import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    authUser: null,
    SelectedUser: null,
    OtherUser: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    SelectedUser: (state, action) => {
      state.SelectedUser = action.payload;
    },
    SetOtherUser: (state, action) => {
      state.OtherUser = action.payload;
    },
  },
});

export const { setAuthUser, SelectedUser, SetOtherUser } = userSlice.actions;
export default userSlice.reducer;
