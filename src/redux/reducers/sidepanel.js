import {
  TOGGLE_SIDEPANEL,
  OPEN_SIDEPANEL,
  CLOSE_SIDEPANEL,
} from "../../redux/actions/sidepanel";

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
    case OPEN_SIDEPANEL:
      return {
        ...state,
        open: true,
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
