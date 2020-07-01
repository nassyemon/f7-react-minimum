import { getDocumentList } from "../api/document";
import { hasSession, getSessionId } from "../selectors/login";
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
    if (!hasSession(state)) {
      /* TODO REFACTOR */
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
      alert("セッションが無効になりました。再ログインが必要です");
      // dispatch(forceLogout());
    }
  };
};