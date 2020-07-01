const ofLogin = f => state => {
  return f(state.login || {});
};
export const getUserName = ofLogin(s => s.user_name);
export const getUserId = ofLogin(s => s.user_id);
export const getSessionId = ofLogin(s => s.session);
export const hasSession = ofLogin(s => !!s.session);