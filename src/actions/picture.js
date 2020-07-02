import { createAction } from "redux-actions";
import { postDocument } from "../api/document";
import { getLastPicture } from "../selectors/picture";
import { apiRequestPrototype } from "./utils";

export const ADD_PICTURE = "ADD_PICTURE";
export const CLEAR_PICTURE = "CLEAR_PICTURE";
export const SEND_PICTURE_START = "SEND_PICTURE_START";
export const SEND_PICTURE_SUCCESS = "SEND_PICTURE_SUCCESS";
export const SEND_PICTURE_FAIL = "SEND_PICTURE_FAIL";

export const addPicture = (imageURI, name) => ({
  type: "ADD_PICTURE",
  payload: {
    uri: imageURI,
    name,
  },
});

export const clearPicture = () => ({
  type: "CLEAR_PICTURE",
});

export const sendPicture = apiRequestPrototype(
  createAction(SEND_PICTURE_START),
  createAction(SEND_PICTURE_SUCCESS),
  createAction(SEND_PICTURE_FAIL),
  async (sessionId, _, getState) => {
    const state = getState();
    const image = getLastPicture(state).uri;
    const title = "This is test from app";
    const results = await postDocument(sessionId, {
      image,
      title,
    });
    console.log(results);
    return;
  }
);
