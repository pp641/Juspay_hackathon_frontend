import axios from "axios";
export function logout(token) {
  return {
    type: "LOGOUT",
    payload: token,
  };
}

export const createMentorAccount = (data) => async (dispatch) => {
  await axios
    .post(`http://localhost:5000/api/createMentor`, {
      body: data,
    })
    .then((res) => {
      dispatch({
        type: "MENTOR_SIGNUP_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "MENTOR_SIGNUP_FAILED",
        payload: err,
      });
    });
};

export const createStudentAccount = (data) => async (dispatch) => {
  await axios
    .post(`http://localhost:5000/api/createStudent`, {
      body: data,
    })
    .then((res) => {
      dispatch({
        type: "STUDENT_SIGNUP_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "STUDENT_SIGNUP_FAILED",
        payload: err,
      });
    });
};

export const login = (data) => async (dispatch) => {
  await axios
    .post(`http://localhost:5000/api/login`, {
      body: data,
    })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", res.data.data.user._id);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOGIN_FAILED",
        payload: err,
      });
    });
};
