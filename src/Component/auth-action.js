import { client } from "./client";

import axios from "axios";

export function signupMentorSuccess(signupForm) {
  return {
    type: "SIGNUP_SUCCESS",
    payload: client.post("/createStudent", signupForm),
  };
}

export function signupMentorFailed(data) {
  return {
    type: "SIGNUP_FAILED",
    payload: data,
  };
}

export function logout(token) {
  return {
    type: "LOGOUT",
    payload: token,
  };
}

export const createStudentAccount = (data) => async (dispatch) => {
  await axios
    .post(`http://localhost:5000/api/createStudent`, {
      body: data,
    })
    .then((res) => {
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "SIGNUP_FAILED",
        payload: err,
      });
    });
};
