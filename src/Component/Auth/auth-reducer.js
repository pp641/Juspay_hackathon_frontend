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
    case "LOGIN_FAILED":
      return {
        ...state,
        loginFailedDetails: action.payload,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loginDetails: action.payload,
      };
    case "STUDENT_SIGNUP_SUCCESS":
      return {
        ...state,
        signupDetails: action.payload,
      };
    case "STUDENT_SIGNUP_FAILED":
      return {
        ...state,
        signupFailedDetails: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
