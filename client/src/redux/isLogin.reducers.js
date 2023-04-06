// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

import { createSlice } from "@reduxjs/toolkit";

export const isLoginSlice = createSlice({
  name: "submit",
  initialState: {
    status: false,
    userInfo: {},
  },
  reducers: {
    submitted: (state) => {
      state.status = true;
    },
    notSubmitted: (state) => {
      state.status = false;
    },
    setLoginUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setNullUser: (state) => {
      state.userInfo = {};
    },
  },
});

export const { submitted, notSubmitted, setLoginUser, setNullUser } =
  isLoginSlice.actions;

export default isLoginSlice.reducer;
