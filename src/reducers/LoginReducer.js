const initialState = {
  username: '',
  password: '',
  login: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USERNAME_UPDATED':
      return {
        ...state,
        username: action.payload
      };
    case 'PASSWORD_UPDATED':
      return {
        ...state,
        password: action.payload
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};
