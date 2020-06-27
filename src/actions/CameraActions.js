import { goBack, navigateTo } from "framework7-redux";

export const openWebApiCamera = () => navigateTo("/camera/");

export const closeWebApiCamera = () => goBack();

export const addPicture = (imageURI, name) => ({
  type: "ADD_PICTURE",
  payload: {
    uri: imageURI,
    name,
  }
});

export const clearPicture = () => ({
  type: "CLEAR_PICTURE",
});
