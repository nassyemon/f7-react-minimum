const ofLogin = (f) => (state) => {
  return f(state.login || {});
};
export const getUsername = ofLogin((s) => s.username);
export const getPassword = ofLogin((s) => s.password);
export const hasSession = ofLogin((s) => s.login);

export const loginValid = (state) => {
  return getPassword(state) === "password!";
};
