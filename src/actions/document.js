import { createAction } from "redux-actions";
import { getDocumentList, postDocument } from "../api/document";
import { hasSession, getSessionId } from "../selectors/login";
import { getLastPicture } from "../selectors/picture";
import { login } from "./login";
import { apiRequestPrototype } from "./utils";

export const FETCH_DOCUMENTS_START = "FETCH_DOCUMENTS_START";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAIL = "FETCH_DOCUMENTS_FAIL";

export const CLEAR_DOCUMENTS = "CLEAR_DOCUMENTS";

export const fetchDocuments = apiRequestPrototype(
  createAction(FETCH_DOCUMENTS_START),
  createAction(FETCH_DOCUMENTS_SUCCESS),
  createAction(FETCH_DOCUMENTS_FAIL),
  async (sessionId) => {
    const results = await getDocumentList(sessionId);
    console.log(results);
    return results.data;
  }
);

export const createDocument = () => async (dispatch, getState) => {
  const state = getState();
  /* TODO REFACTOR */
  if (!hasSession(state)) {
    const code = await logtryOAuthin();
    dispatch(login(code));
  }
  const sessionId = getSessionId(state);
  const image = getLastPicture(state).uri;
  const title = "This is test from app";
  try {
    const results = await postDocument(sessionId, {
      image,
      title,
    });
    console.log(results);
  } catch (error) {
    console.error(error);
    // alert("セッションが無効になりました。再ログインが必要です");
    alert("エラーが発生しました。再度やり直してください");
    // dispatch(forceLogout());
  }
};
