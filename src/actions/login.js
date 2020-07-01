import { authCheck, getSession } from "../api/auth";
import { hasSession } from "../selectors/login";
import { replaceToLogin } from "./navigation";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

const loginSuccess = ({ session, user_id, user_name }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    session,
    user_id,
    user_name,
  },
});

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
    dispatch(replaceToLogin());
  };
};

export const login = code => {
  return async (dispatch, getState) => {
    const state = getState();
    if (hasSession(state)) {
      dispatch({ type: LOGOUT });
    }
    try {
      const { session, user_id, user_name } = await getSession(code);
      return dispatch(loginSuccess({
        session,
        user_name,
        user_id,
      }));
    } catch (error) {
      dispatch({ type: LOGOUT });
      console.error(error);
      // TODO:
      alert("Incorrect accessToken");
    }
  };
};

export const refresh = () => {
  return async (dispatch, getState) => {
    const state = getState();
    if (hasSession(state)) {
      dispatch({ type: LOGOUT });
    }
    try {
      const { session, userid, name } = await authCheck(code);
      return dispatch(loginSuccess({
        session,
        userid,
        name,
      }));
    } catch (error) {
      dispatch({ type: LOGOUT });
      console.error(error);
      // TODO:
    }
  };
}