import { getDocumentList, postDocument } from "../api/document";
import { hasSession, getSessionId } from "../selectors/login";
import { getLastPicture } from "../selectors/picture";
import { login } from "./login";

export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const CLEAR_DOCUMENTS = "CLEAR_DOCUMENTS";



const fetchDocumentsSuccess = (documents) => ({
  type: FETCH_DOCUMENTS_SUCCESS,
  payload: {
    documents,
  },
});

export const fetchDocuments = () => {
  return async (dispatch, getState) => {
    const state = getState();
    /* TODO REFACTOR */
    if (!hasSession(state)) {
      const code = await logtryOAuthin();
      dispatch(login(code));
    }
    const sessionId = getSessionId(state);
    try {
      const results = await getDocumentList(sessionId);
      console.log(results);
      dispatch(fetchDocumentsSuccess(results.data));
    } catch (error) {
      console.error(error);
      // alert("セッションが無効になりました。再ログインが必要です");
      alert("エラーが発生しました。再度やり直してください");
      // dispatch(forceLogout());
    }
  };
};

export const createDocument = () => {
  return async (dispatch, getState) => {
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
}