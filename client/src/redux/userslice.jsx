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
    SetSelectedUser: (state, action) => {
      state.SelectedUser = action.payload;
    },
  },
});

export const { setAuthUser, SetSelectedUser } = userSlice.actions;
export default userSlice.reducer;
