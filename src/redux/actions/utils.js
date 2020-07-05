import { requireAuth } from "./login";

export const apiRequestPrototype = (
  createStartAction,
  createSuccessAction,
  createFailAction,
  apiCallback
) => async (dispatch, getState) => {
  // TODO: reauth
  let sessionId = null;
  try {
    sessionId = await dispatch(requireAuth());
  } catch (error) {
    alert("セッションが無効になりました。再ログインが必要です");
    return;
  }
  try {
    dispatch(createStartAction());
    const payload = await apiCallback(sessionId, dispatch, getState);
    dispatch(createSuccessAction(payload));
  } catch (error) {
    dispatch(createFailAction());
    console.error(error);
    alert("エラーが発生しました。再度やり直してください");
  }
};
