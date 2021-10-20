import axios from "axios";

export const fetchAllSkills = () => async (dispatch) => {
  await axios
    .get(`http://localhost:5000/api/fetchSkills`)
    .then((result) => {
      dispatch({
        type: "GET_ALL_SKILLS_SUCCESS",
        payload: result.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_ALL_SKILLS_FAILED",
        payload: error,
      });
    });
};

export const saveNewSkill = (data) => async (dispatch) => {
  await axios
    .post(`http://localhost:5000/api/addSkill`, {
      body: data,
    })
    .then((result) => {
      console.log(result.data);
      dispatch({
        type: "SAVE_NEW_SKILL_SUCCESS",
        paylaod: result.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "SAVE_NEW_SKILL_FAILED",
        payload: error,
      });
    });
};
