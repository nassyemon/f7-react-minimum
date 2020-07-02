import {
  FETCH_DOCUMENTS_START,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAIL,
  CLEAR_DOCUMENTS,
} from "../actions/document";
import { start, success, fail } from "./utils";

const initialState = Object.freeze({
  data: null,
  loading: false,
  loaded: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS_START:
      return start(state);
    case FETCH_DOCUMENTS_SUCCESS:
      return success({
        ...initialState,
        data: action.payload,
      });
    case FETCH_DOCUMENTS_FAIL:
      return fail(state);
    case CLEAR_DOCUMENTS:
      return { ...initialState };
    default:
      return state;
  }
};
