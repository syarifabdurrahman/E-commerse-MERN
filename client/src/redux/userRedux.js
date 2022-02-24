import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    newUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSucces: (state, action) => {
      state.isFetching = false;
      state.newUser = action.payload;
    },
    registerFail: (state) => {
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSucces: (state) => {
      state.isFetching = false;
      state.currentUser = null;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSucces,
  registerFail,
  logoutStart,
  logoutSucces,
  logoutFailure,
} = userSlice.actions;
export default userSlice.reducer;
