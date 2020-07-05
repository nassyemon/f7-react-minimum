import {
  FETCH_DETAIL_START,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAIL,
  CLEAR_DETAIL,
} from "../../redux/actions/detail";
import { loadStart, loadSuccess, loadFail } from "./utils";

const initialState = Object.freeze({
  data: null,
  loading: false,
  loaded: false,
  error: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL_START:
      return loadStart(state);
    case FETCH_DETAIL_SUCCESS:
      return loadSuccess({
        ...initialState,
        data: action.payload,
      });
    case FETCH_DETAIL_FAIL:
      return loadFail(state);
    case CLEAR_DETAIL:
      return { ...initialState };
    default:
      return state;
  }
};
