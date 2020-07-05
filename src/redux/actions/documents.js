import { createAction } from "redux-actions";
import { getDocumentList, deleteDocument } from "../../api/document";
import { getSeleted } from "../selectors/documents";
import { setToast } from "../actions/toast";
import { apiRequestPrototype } from "./utils";

export const FETCH_DOCUMENTS_START = "FETCH_DOCUMENTS_START";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAIL = "FETCH_DOCUMENTS_FAIL";

export const DELETE_DOCUMENTS_START = "DELETE_DOCUMENTS_START";
export const DELETE_DOCUMENTS_SUCCESS = "DELETE_DOCUMENTS_SUCCESS";
export const DELETE_DOCUMENTS_FAIL = "DELETE_DOCUMENTS_FAIL";

export const TOGGLE_DOCUMENT_SELECT = "TOGGLE_DOCUMENT_SELECT";
export const CLEAR_DOCUMENT_SELECT = "CLEAR_DOCUMENT_SELECT";

export const CLEAR_DOCUMENTS = "CLEAR_DOCUMENTS";

export const toggleDocumentSelect = createAction(TOGGLE_DOCUMENT_SELECT);
export const clearDocumentSelect = createAction(CLEAR_DOCUMENT_SELECT);

export const fetchDocuments = () =>
  apiRequestPrototype(
    createAction(FETCH_DOCUMENTS_START),
    createAction(FETCH_DOCUMENTS_SUCCESS),
    createAction(FETCH_DOCUMENTS_FAIL),
    async (sessionId) => {
      const results = await getDocumentList(sessionId);
      console.log(results);
      return results.data;
    }
  );

export const deleteDocuments = () =>
  apiRequestPrototype(
    createAction(DELETE_DOCUMENTS_START),
    createAction(DELETE_DOCUMENTS_SUCCESS),
    createAction(DELETE_DOCUMENTS_FAIL),
    async (sessionId, dispatch, getState) => {
      const state = getState();
      const seleted = getSeleted(state);
      const results = await Promise.all(
        seleted.map((id) => deleteDocument(sessionId, id))
      );
      console.log(results);
      dispatch(setToast("削除完了"));
      return results;
    }
  );
