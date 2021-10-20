import { React, useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../src/Component/Auth/login";
import Signup from "../src/Component/Auth/student-signup";
import Home from "../src/Component/Home/homePage";
import GetAllSkills from "./Component/Skill/get-All-Skills";
// const Home = () => <h1>Home</h1>;
// const Signup = () => <h1>Signup</h1>;
const Logout = () => <h1>Logout</h1>;
const App = () => {
  useEffect(() => {
    localStorage.getItem("token");
  }, []);

  return (
    <Router>
      <div>
        {" "}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/createUser">Signup</Link>
            </li>
            <li>
              <Link to="/logout">Logout Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route exact path="/createUser" component={Signup} exact />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/allSkills">
            <GetAllSkills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
