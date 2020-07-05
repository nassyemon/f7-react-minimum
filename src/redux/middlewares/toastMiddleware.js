import { clearToast, SET_TOAST, CLEAR_TOAST } from "../actions/toast";

export default function toastMiddleware({ delay }) {
  let timerHandle = null;
  return ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === SET_TOAST) {
      if (timerHandle) {
        return;
      }
      timerHandle = setTimeout(() => {
        timerHandle = null;
        dispatch(clearToast());
      }, delay);
    }
    if (action.type === CLEAR_TOAST) {
      if (timerHandle) {
        clearTimeout(timerHandle);
        timerHandle = null;
      }
    }
  };
}
