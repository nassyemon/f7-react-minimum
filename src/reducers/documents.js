import { FETCH_DOCUMENTS_SUCCESS, CLEAR_DOCUMENTS } from "../actions/documents";

const initialState = Object.freeze({
  data: null,
  loading: false,
  loaded: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS_SUCCESS:
      const { documents } = action.payload;
      return {
        ...initialState,
        data: documents,
        loaded: true,
        loading: false,
      };
    case CLEAR_DOCUMENTS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
