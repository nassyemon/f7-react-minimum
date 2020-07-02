import { createAction } from "redux-actions";
import { getDocumentList } from "../api/document";
import { apiRequestPrototype } from "./utils";

export const FETCH_DOCUMENTS_START = "FETCH_DOCUMENTS_START";
export const FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS";
export const FETCH_DOCUMENTS_FAIL = "FETCH_DOCUMENTS_FAIL";

export const CLEAR_DOCUMENTS = "CLEAR_DOCUMENTS";

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
