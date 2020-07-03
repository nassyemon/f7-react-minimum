import { createAction } from "redux-actions";
import { TOAST_TYPE_SUCCESS } from "../const/toastTypes";

export const SET_TOAST = "SET_TOAST";
export const CLEAR_TOAST = "CLEAR_TOAST";

export const setToast = (message, type = TOAST_TYPE_SUCCESS) => ({
  type: SET_TOAST,
  payload: {
    message,
    type,
  },
});

export const clearToast = createAction(CLEAR_TOAST);