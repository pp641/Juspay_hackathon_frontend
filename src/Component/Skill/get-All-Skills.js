import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllSkills } from "./skill-action";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const GetAllSkills = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { skills } = state.skillReducer;

  //  console.log("getting all", skills);

  const [allSkills, setAllSkills] = useState([]);
  useEffect(() => {
    dispatch(fetchAllSkills(setAllSkills(skills)));
    console.log(allSkills);
  }, []);

  return (
    <>
      <Grid container>
        {allSkills.map((data, key) => (
          <Grid sx={{ margin: "10px" }} xs={5} md={5} lg={3}>
            <Card sx={{ height: "100px", border: "2px solid black" }}>
              <CardContent>{data.skill}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GetAllSkills;
