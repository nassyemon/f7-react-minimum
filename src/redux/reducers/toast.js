import { SET_TOAST, CLEAR_TOAST } from "../../redux/actions/toast";

const initialState = Object.freeze({
  visible: false,
  message: null,
  type: null,
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOAST:
      return {
        visible: true,
        type: payload.type,
        message: payload.message,
      };
    case CLEAR_TOAST:
      return { ...state, visible: false };
    default:
      return state;
  }
};
