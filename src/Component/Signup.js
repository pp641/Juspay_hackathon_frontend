import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { TextField, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createStudentAccount } from "./auth-action";

export default function Signup() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    collegeName: "",
    skills: [],
  });

  const handleFormState = (e) => {
    e.preventDefault();
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (data) => {
    console.log("getting data", data);
    dispatch(createStudentAccount(data));
  };

  return (
    <>
      <Typography>Student Signup Section</Typography>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid sx={{ margin: "10px" }} item xs={12} md={4} lg={5}>
          <TextField
            label="First Name"
            variant="outlined"
            name="firstName"
            value={formState.firstName}
            onChange={handleFormState}
            required={true}
            fullWidth={true}
            size="medium"
          />
        </Grid>
        <Grid sx={{ margin: "10px" }} item xs={12} md={4} lg={5}>
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={formState.lastName}
            onChange={handleFormState}
            fullWidth={true}
            size="medium"
          />
        </Grid>

        <Grid sx={{ margin: "10px" }} item xs={12} md={4} lg={5}>
          <TextField
            label="Email Address"
            variant="outlined"
            required={true}
            name="email"
            value={formState.email}
            onChange={handleFormState}
            fullWidth={true}
            size="medium"
          />
        </Grid>
        <Grid sx={{ margin: "10px" }} item xs={12} md={4} lg={5}>
          <TextField
            label="Password"
            variant="outlined"
            required={true}
            value={formState.password}
            name="password"
            onChange={handleFormState}
            fullWidth={true}
            size="medium"
          />
        </Grid>
        <Grid sx={{ margin: "10px" }} item xs={3} md={4} lg={3}>
          <TextField
            label="Age"
            variant="outlined"
            required={true}
            value={formState.age}
            name="age"
            type="number"
            onChange={handleFormState}
            fullWidth={true}
            size="medium"
          />
        </Grid>
        <Grid sx={{ margin: "10px" }} item xs={3} md={4} lg={3}>
          <TextField
            label="Date Of Birth"
            variant="outlined"
            type="number"
            required={true}
            value={formState.dob}
            name="dob"
            onChange={handleFormState}
            fullWidth={true}
            size="medium"
          />
        </Grid>

        <Grid sx={{ margin: "10px" }} item xs={3} md={2} lg={3}>
          <TextField
            label="Gender"
            variant="outlined"
            required={true}
            name="gender"
            value={formState.gender}
            onChange={handleFormState}
            fullWidth={true}
            size="medium"
          />
        </Grid>
        <Grid sx={{ margin: "10px" }} item xs={12} md={5} lg={4}>
          <TextField
            label="college"
            variant="outlined"
            required={true}
            name="collegeName"
            value={formState.collegeName}
            onChange={handleFormState}
            fullWidth={true}
            size="medium"
          />
        </Grid>
        <Grid sx={{ margin: "10px" }} item xs={12} md={5} lg={4}>
          <TextField
            label="skills"
            variant="outlined"
            required={true}
            name="skills"
            value={formState.skills}
            onChange={handleFormState}
            fullWidth={true}
            size="medium"
          />
        </Grid>

        <br />
        <Grid item>
          <Button
            onClick={() => {
              handleSignup(formState);
              setFormState((formState) => ({
                ...formState,
                age: "",
                firstName: "",
                lastName: "",
                collegeName: "",
                email: "",
                password: "",
                skills: "",
                dob: "",
                gender: "",
              }));
            }}
            variant="contained"
            color="primary"
            sx={{ margin: "10px" }}
          >
            SignUp
          </Button>
        </Grid>
        {console.log(formState)}
      </Grid>
    </>
  );
}
