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
