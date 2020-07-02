import {
  SEND_PICTURE_START,
  SEND_PICTURE_SUCCESS,
  SEND_PICTURE_FAIL,
  ADD_PICTURE,
  CLEAR_PICTURE,
  SET_TITLE,
} from "../actions/picture";
import { sendStart, sendSuccess, sendFail } from "./utils";

const initialState = {
  pictures: [],
  title: "",
  sending: false,
  sended: false,
  error: null,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_PICTURE:
      return {
        ...state,
        pictures: [
          { uri: payload.uri, name: payload.name || "NO_NAME" },
          ...state.pictures,
        ],
      };
    case SEND_PICTURE_START:
      return sendStart(state);
    case SEND_PICTURE_SUCCESS:
      return sendSuccess(initialState);
    case SEND_PICTURE_FAIL:
      return sendFail(state);
    case CLEAR_PICTURE:
      return {
        ...initialState,
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload,
      };
    default:
      return state;
  }
};
