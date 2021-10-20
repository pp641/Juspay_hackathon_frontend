import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { saveNewSkill } from "./skill-action";

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
import { useHistory } from "react-router-dom";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   height: 60,
//   lineHeight: "60px",
// }));

const GetAllSkills = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { skills } = state.skillReducer;
  const history = useHistory();
  //  console.log("getting all", skills);

  const [open, setOpen] = React.useState(false);

  const [newSkill, setNewSkill] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    dispatch(fetchAllSkills(setAllSkills(skills)));
    console.log(allSkills);
  }, [skills]);

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Add A Skill
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">"Add A Skill"</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              onChange={(e) => {
                setNewSkill(e.target.value);
                console.log(newSkill);
              }}
              placeholder="Enter New Skill"
              value={newSkill}
            ></TextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              dispatch(saveNewSkill(newSkill));
              setNewSkill("");
              handleClose();
            }}
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container>
        {allSkills.map((data, key) => (
          <Grid sx={{ margin: "10px" }} xs={5} md={5} lg={3}>
            <Card sx={{ height: "200px", border: "2px solid black" }}>
              <CardContent>{data.skill}</CardContent>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  history.push(`/becomeMentor/${data._id}`);
                }}
              >
                Become a Mentor
              </Button>
              <Button variant="contained" color="primary">
                View All Mentors
              </Button>
              <Button variant="contained" color="primary">
                Want to Learn {data.skill} ? , Select A slot Today
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GetAllSkills;
