import { replace } from "connected-react-router";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const openLogin = () => replace("/login");
export const closeLogin = () => replace("/");

const loginSuccess = (accessToken) => ({
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

export const login = (accessToken) => {
  return (dispatch, getState) => {
    const state = getState();
    if (valudateAccessToken(accessToken)) {
      dispatch(loginSuccess(accessToken));
    } else {
      alert('incorrect accessToken');
      // TODO;
    }
  };
};

function valudateAccessToken(accessToken) {
  // TODO;
  return !!accessToken;
}