import {
  FETCH_DOCUMENTS_START,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAIL,
  CLEAR_DOCUMENTS,
} from "../actions/document";
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
  switch (action.type) {
    case FETCH_DOCUMENTS_START:
      return loadStart(state);
    case FETCH_DOCUMENTS_SUCCESS:
      return loadSuccess({
        ...initialState,
        data: action.payload,
      });
    case FETCH_DOCUMENTS_FAIL:
      return loadFail(state);
    case SEND_PICTURE_SUCCESS:
    case CLEAR_DOCUMENTS:
      return { ...initialState };
    default:
      return state;
  }
};
