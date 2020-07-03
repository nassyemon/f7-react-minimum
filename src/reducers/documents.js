import {
  FETCH_DOCUMENTS_START,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAIL,
  TOGGLE_DOCUMENT_SELECT,
  CLEAR_DOCUMENT_SELECT,
  CLEAR_DOCUMENTS,
} from "../actions/documents";
import {
  SEND_PICTURE_SUCCESS
} from "../actions/picture";
import { loadStart, loadSuccess, loadFail } from "./utils";

const initialState = Object.freeze({
  data: null,
  loading: false,
  loaded: false,
  error: null,
});

export default (state = initialState, action) => {
  const { payload } = action;
  const { data } = state;
  switch (action.type) {
    case FETCH_DOCUMENTS_START:
      return loadStart(state);
    case FETCH_DOCUMENTS_SUCCESS:
      return loadSuccess({
        ...initialState,
        data: payload,
      });
    case FETCH_DOCUMENTS_FAIL:
      return loadFail(state);
    case TOGGLE_DOCUMENT_SELECT:
      return {
        ...state,
        data: data.map((doc) => doc.id === payload ? { ...doc, selected: !doc.selected } : doc),
      };
    case CLEAR_DOCUMENT_SELECT:
      return {
        ...state,
        data: data.map((doc) => doc.id === payload ? { ...doc, selected: false } : doc),
      };
    case SEND_PICTURE_SUCCESS:
    case CLEAR_DOCUMENTS:
      return { ...initialState };
    default:
      return state;
  }
};
