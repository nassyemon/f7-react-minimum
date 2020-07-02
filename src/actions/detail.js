import { createAction } from "redux-actions";
import { getDocument } from "../api/document";
import { apiRequestPrototype } from "./utils";

export const FETCH_DETAIL_START = "FETCH_DETAIL_START";
export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS";
export const FETCH_DETAIL_FAIL = "FETCH_DETAIL_FAIL";

export const CLEAR_DETAIL = "CLEAR_DETAIL";

export const fetchDocumentDetail = (id) => apiRequestPrototype(
  createAction(FETCH_DETAIL_START),
  createAction(FETCH_DETAIL_SUCCESS),
  createAction(FETCH_DETAIL_FAIL),
  async (sessionId) => {
    const results = await getDocument(sessionId, id);
    console.log(results);
    return results.data;
  }
);

export const clearDocumentDetail = createAction(CLEAR_DETAIL);

