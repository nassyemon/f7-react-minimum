const initialState = {
  pictures: [],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_PICTURE":
      return {
        ...state,
        pictures: [...state.pictures, { uri: payload.uri, name: payload.name || "<<NO NAME>>" }],
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
