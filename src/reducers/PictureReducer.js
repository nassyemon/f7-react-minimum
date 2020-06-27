const initialState = {
  pictures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PICTURE":
      return {
        ...state,
        pictures: [...state.pictures, { uri: action.payload }],
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
