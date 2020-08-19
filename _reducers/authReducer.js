const initialState = {
  loggedIn: false,
  token: null,
  user: null,
  settings: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: undefined,
        profile: undefined,
      };
    case "PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "FORGOT":
      return {
        ...state,
        forgot: action.fogot,
      };
    case "CHECK_EMAIL":
      return {
        ...state,
        checkmail: action.checkmail,
      };
    default:
      return state;
  }
}
