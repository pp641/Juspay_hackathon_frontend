const skillReducer = (
  state = {
    skills: [],
  },
  action
) => {
  switch (action.type) {
    case "GET_ALL_SKILLS_SUCCESS":
      return {
        ...state,
        skills: action.payload,
      };
    default:
      return state;
  }
};

export default skillReducer;
