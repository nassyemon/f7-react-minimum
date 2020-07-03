export const loadStart = (nextState) => ({
  ...nextState,
  loading: true,
  loaded: false,
  error: null,
});
export const loadSuccess = (nextState) => ({
  ...nextState,
  loading: false,
  loaded: true,
  error: null,
});
export const loadFail = (nextState, error = {}) => ({
  ...nextState,
  loading: false,
  loaded: false,
  error,
});
export const sendStart = (nextState) => ({
  ...nextState,
  sending: true,
  sended: false,
  error: null,
});
export const sendSuccess = (nextState) => ({
  ...nextState,
  sending: false,
  sended: true,
  error: null,
});
export const sendFail = (nextState, error = {}) => ({
  ...nextState,
  sending: false,
  sended: false,
  error,
});

export const deleteStart = (nextState) => ({
  ...nextState,
  deleting: true,
  deleted: false,
  error: null,
});
export const deleteSuccess = (nextState) => ({
  ...nextState,
  deleting: false,
  deleted: true,
  error: null,
});
export const deleteFail = (nextState, error = {}) => ({
  ...nextState,
  deleting: false,
  deleted: false,
  error,
});
