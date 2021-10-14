const authReducer = (
  state = {
    loginDetails: {},
    loginFailedDetails: {},
    signupDetails: {},
    signupFailedDetails: {},
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loginDetails: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        loginFailedDetails: action.payload,
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signupDetails: action.payload,
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        signupFailedDetails: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
