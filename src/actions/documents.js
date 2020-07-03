import { createAction } from "redux-actions";
import { getDocumentList } from "../api/document";
import { apiRequestPrototype } from "./utils";

export const FETCH_DOCUMENTS_START = "FETCH_DOCUMENTS_START";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAIL = "FETCH_DOCUMENTS_FAIL";

export const TOGGLE_DOCUMENT_SELECT = "TOGGLE_DOCUMENT_SELECT";
export const CLEAR_DOCUMENT_SELECT = "CLEAR_DOCUMENT_SELECT";

export const CLEAR_DOCUMENTS = "CLEAR_DOCUMENTS";

export const toggleDocumentSelect = createAction(TOGGLE_DOCUMENT_SELECT);
export const clearDocumentSelect = createAction(CLEAR_DOCUMENT_SELECT);

export const fetchDocuments = () => apiRequestPrototype(
  createAction(FETCH_DOCUMENTS_START),
  createAction(FETCH_DOCUMENTS_SUCCESS),
  createAction(FETCH_DOCUMENTS_FAIL),
  async (sessionId) => {
    const results = await getDocumentList(sessionId);
    console.log(results);
    return results.data;
  }
);
