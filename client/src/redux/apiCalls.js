import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSucces,
  registerFail,
  registerStart,
  registerSucces,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    // set token
    localStorage.setItem("ACCESS_TOKEN", res.data.accessToken);
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSucces(res.data));
  } catch {
    dispatch(registerFail());
  }
};

export const signOut = async (dispatch, user) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSucces(user));
  } catch {
    dispatch(loginFailure());
  }
};
