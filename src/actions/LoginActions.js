import { goBack, navigateTo, showAlert } from "framework7-redux";

import { loginValid } from "../selectors/LoginSelectors";
import { getHistoryMain } from "../selectors/Framework7Selector";

export const openLogin = () => navigateTo("/login/");
export const closeLogin = canGoBack => (canGoBack ? goBack() : navigateTo("/"));

export const usernameUpdated = username => ({
  type: "USERNAME_UPDATED",
  payload: username,
});

export const passwordUpdated = password => ({
  type: "PASSWORD_UPDATED",
  payload: password,
});

export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
});

export const logout = () => {
  return dispatch => {
    dispatch({
      type: "LOGOUT",
    });
    dispatch(navigateTo("/login/"));
  };
};

export const login = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (loginValid(state)) {
      const history = getHistoryMain(state);
      dispatch(loginSuccess());
      dispatch(closeLogin(history?.length > 1));
    } else {
      dispatch(
        showAlert(
          'Incorrect password! Hint: please enter "password!".',
          "Failed Login"
        )
      );
    }
  };
};
