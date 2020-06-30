import { replace } from "connected-react-router";
import { authCheck } from "../api/auth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const openLogin = () => replace("/login");
export const closeLogin = () => replace("/");

const loginSuccess = accessToken => ({
  type: LOGIN_SUCCESS,
  payload: accessToken,
});

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT,
    });
    dispatch(replace("/login"));
  };
};

export const login = accessToken => {
  return async (dispatch, getState) => {
    // const state = getState();
    try {
      const res = await authCheck(accessToken);
      return dispatch(loginSuccess(accessToken));
    } catch (error) {
      console.error(error);
      alert("Incorrect accessToken");
    }
  };
};
