import { checkAuth, getSession, destroySession } from "../api/auth";
import { hasSession, getSessionId } from "../selectors/login";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REAUTH_SUCCESS = "REAUTH_SUCCESS";
export const LOGOUT = "LOGOUT";

const forceLogout = () => ({
  type: LOGOUT,
});

const logoutSuccess = () => ({
  type: LOGOUT,
});

const loginSuccess = ({ session, user_id, user_name }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    session,
    user_id,
    user_name,
  },
});

const reauthSuccess = ({ session, user_id, user_name }) => ({
  type: REAUTH_SUCCESS,
  payload: {
    session,
    user_id,
    user_name,
  },
});

export const logout = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const sessionId = getSessionId(state);
    try {
      await destroySession(sessionId);
      dispatch(logoutSuccess());
    } catch (error) {
      console.error(error);
      alert("ログアウト処理に失敗しました。別のブラウザで手動でログアウトを行ってください");
      dispatch(forceLogout());
    }
  };
};

export const login = code => {
  return async (dispatch, getState) => {
    const state = getState();
    if (hasSession(state)) {
      dispatch(forceLogout());
    }
    try {
      const { session, user_id, user_name } = await getSession(code);
      return dispatch(loginSuccess({
        session,
        user_name,
        user_id,
      }));
    } catch (error) {
      console.error(error);
      alert("連携認証に失敗しました。もう一度ログインをやりなおしてください");
      dispatch(forceLogout());
    }
  };
};

export const reauth = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const sessionId = getSessionId(state);
    try {
      const { session, user_id, user_name } = await checkAuth(sessionId);
      return dispatch(reauthSuccess({
        session,
        user_name,
        user_id,
      }));
    } catch (error) {
      console.error(error);
      alert("セッションが無効になりました。再ログインが必要です");
      dispatch(forceLogout());
    }
  };
}