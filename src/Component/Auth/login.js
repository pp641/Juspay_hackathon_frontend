import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { TextField, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./auth-action";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleFormState = (e) => {
    e.preventDefault();
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (data) => {
    console.log("getting data", data);
    dispatch(login(data));
    history.push("/");
  };

  return (
    <>
      <Typography> Login Section</Typography>
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
      <br />
      <Grid item>
        <Button
          onClick={() => {
            handleLogin(formState);
            setFormState((formState) => ({
              ...formState,
              email: "",
              password: "",
            }));
          }}
          variant="contained"
          color="primary"
          sx={{ margin: "10px" }}
        >
          Login
        </Button>
      </Grid>
    </>
  );
}
