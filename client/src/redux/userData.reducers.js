// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userInfo",
  initialState: {
    userdata: [
      { fname: "admin", lname: "admin", email: "admin@dal.ca", pass: "admin" },
      {
        fname: "Shvet",
        lname: "Anaghan",
        email: "shvet@dal.ca",
        pass: "shvet",
      },
    ],
  },
  reducers: {
    newUser: (state, action) => {
      state.userdata.push(action.payload);
    },
    updatePassword: (state, action) => {
      state.userdata.forEach((user) => {
        if (user.email === action.payload.email) {
          user.pass = action.payload.pass;
        }
      });
    },
  },
});

export const { newUser, updatePassword } = userDataSlice.actions;
export default userDataSlice.reducer;
