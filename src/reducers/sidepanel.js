import { TOGGLE_SIDEPANEL, CLOSE_SIDEPANEL } from "../actions/sidepanel";

const initialState = {
  open: false,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case TOGGLE_SIDEPANEL:
      return {
        ...state,
        open: !state.open,
      };
    case CLOSE_SIDEPANEL:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
