import { goBack, navigateTo } from 'framework7-redux';

export const openWebApiCamera = () => navigateTo("/camera/");

export const closeWebApiCamera = () => goBack();

export const addPicture = (imageURI) => ({
    type: "ADD_PICTURE",
    payload: imageURI,
  });

export const clearPicture = () => ({
    type: "CLEAR_PICTURE",
})