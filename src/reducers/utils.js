export const start = (nextState) => ({
  ...nextState,
  loading: true,
  loaded: false,
});
export const success = (nextState) => ({
  ...nextState,
  loading: false,
  loaded: false,
});
export const fail = (nextState) => ({
  ...nextState,
  loading: false,
  loaded: false,
});
