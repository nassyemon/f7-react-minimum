import { checkAuth, getSession, destroySession } from "../../api/auth";
import { hasSession, getSessionId } from "../selectors/login";
import { setToast } from "../actions/toast";
import tryOAuth from "../../modules/tryOAuth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REAUTH_SUCCESS = "REAUTH_SUCCESS";
export const LOGOUT = "LOGOUT";

export const logout = () => async (dispatch, getState) => {
  const state = getState();
  const sessionId = getSessionId(state);
  try {
    await destroySession(sessionId);
    dispatch(logoutSuccess());
  } catch (error) {
    console.error(error);
    alert(
      "ログアウト処理に失敗しました。別のブラウザで手動でログアウトを行ってください"
    );
    dispatch(forceLogout());
  }
};

export const login = (code) => async (dispatch, getState) => {
  const state = getState();
  if (hasSession(state)) {
    dispatch(forceLogout());
  }
  try {
    const { session, user_id, user_name } = await getSession(code);
    return dispatch(
      loginSuccess({
        session,
        user_name,
        user_id,
      })
    );
  } catch (error) {
    console.error(error);
    alert("連携認証に失敗しました。もう一度ログインをやりなおしてください");
    dispatch(forceLogout());
  }
};

export const reauth = () => async (dispatch, getState) => {
  const state = getState();
  const sessionId = getSessionId(state);
  try {
    const { session, user_id, user_name } = await checkAuth(sessionId);
    dispatch(
      reauthSuccess({
        session,
        user_name,
        user_id,
      })
    );
    return dispatch(setToast("再認証成功"));
  } catch (error) {
    console.error(error);
    alert("セッションが無効になりました。再ログインが必要です");
    dispatch(forceLogout());
  }
};

export const requireAuth = () => async (dispatch, getState) => {
  const state = getState();
  /* TODO REFACTOR */
  if (!hasSession(state)) {
    const code = await tryOAuth();
    dispatch(login(code));
  }
  return getSessionId(state);
};

// TODO
function forceLogout() {
  return {
    type: LOGOUT,
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT,
  };
}

function loginSuccess({ session, user_id, user_name }) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      session,
      user_id,
      user_name,
    },
  };
}

function reauthSuccess({ session, user_id, user_name }) {
  return {
    type: REAUTH_SUCCESS,
    payload: {
      session,
      user_id,
      user_name,
    },
  };
}
