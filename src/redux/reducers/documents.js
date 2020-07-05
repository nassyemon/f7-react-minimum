import {
  FETCH_DOCUMENTS_START,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_FAIL,
  DELETE_DOCUMENTS_START,
  DELETE_DOCUMENTS_SUCCESS,
  DELETE_DOCUMENTS_FAIL,
  TOGGLE_DOCUMENT_SELECT,
  CLEAR_DOCUMENT_SELECT,
  CLEAR_DOCUMENTS,
} from "../../redux/actions/documents";
import {
  SEND_PICTURE_SUCCESS,
  SEND_PICTURE_FAIL,
} from "../../redux/actions/picture";
import {
  loadStart,
  loadSuccess,
  loadFail,
  deleteStart,
  deleteSuccess,
  deleteFail,
} from "./utils";

const initialState = Object.freeze({
  data: null,
  selected: [],
  loading: false,
  loaded: false,
  deleting: false,
  deleted: false,
  error: null,
});

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_DOCUMENTS_START:
      return loadStart(state);
    case FETCH_DOCUMENTS_SUCCESS:
      return loadSuccess({
        ...state,
        data: payload,
      });
    case FETCH_DOCUMENTS_FAIL:
      return loadFail(state);
    case DELETE_DOCUMENTS_START:
      return deleteStart(state);
    case DELETE_DOCUMENTS_SUCCESS:
      return deleteSuccess({
        ...state,
        data: [],
        selected: [],
        loading: false,
        loaded: false,
      });
    case DELETE_DOCUMENTS_FAIL:
      return deleteFail({
        ...state,
        data: [],
        loading: false,
        loaded: false,
      });
    case TOGGLE_DOCUMENT_SELECT:
      return {
        ...state,
        selected: toggleList(state.selected, payload),
      };
    case CLEAR_DOCUMENT_SELECT:
      return {
        ...state,
        selected: [],
      };
    case SEND_PICTURE_SUCCESS:
    case SEND_PICTURE_FAIL:
    case CLEAR_DOCUMENTS:
      return { ...initialState };
    default:
      return state;
  }
};

function toggleList(list, id) {
  const idx = list.indexOf(id);
  return idx < 0
    ? [...list, id]
    : [...list.slice(0, idx), ...list.slice(idx + 1)];
}
