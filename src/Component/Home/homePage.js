import { Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import { logout } from "../Auth/auth-action";
import { useHistory } from "react-router-dom";
import GetAllSkills from "../Skill/get-All-Skills";

const HomePage = () => {
  const history = useHistory();
  const [token, setToken] = useState("");
  const [result, setResult] = useState("logout");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    localStorage.getItem("token")
      ? setResult(localStorage.getItem("user"))
      : setResult("logout");
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          localStorage.setItem("token", "");
          history.push("/logout");
        }}
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
      <Button variant="contained" color="secondary">
        {" "}
        Become a Mentor
      </Button>
      <Button
        onClick={() => {
          history.push("/allSkills");
        }}
        variant="contained"
        color="primary"
      >
        See All Skills
      </Button>

      <Button> Become a Mentor</Button>
      <br />
      {result}
    </>
  );
};

export default HomePage;
