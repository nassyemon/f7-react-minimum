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
