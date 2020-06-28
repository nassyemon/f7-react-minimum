const initialState = {
  pictures: [],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_PICTURE":
      return {
        ...state,
        pictures: [
          { uri: payload.uri, name: payload.name || "NO_NAME" },
          ...state.pictures,
        ],
      };
    case "CLEAR_PICTURE":
      return {
        ...state,
        pictures: [],
      };
    default:
      return state;
  }
};
