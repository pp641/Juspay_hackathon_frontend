const skillReducer = (
  state = {
    skills: [],
    newSkill: "",
    newSkillFailed: "",
  },
  action
) => {
  switch (action.type) {
    case "GET_ALL_SKILLS_SUCCESS":
      return {
        ...state,
        skills: action.payload,
      };
    case "SAVE_NEW_SKILL_SUCCESS":
      return {
        ...state,
        newSkill: action.payload,
      };
    case "SAVE_NEW_SKILL_FAILED":
      return {
        ...state,
        newSkillFailed: action.payload,
      };
    default:
      return state;
  }
};

export default skillReducer;
