export const start = (nextState) => ({
  ...nextState,
  loading: true,
  loaded: false,
  error: null,
});
export const success = (nextState) => ({
  ...nextState,
  loading: false,
  loaded: true,
  error: null,
});
export const fail = (nextState, error = {}) => ({
  ...nextState,
  loading: false,
  loaded: false,
  error,
});
