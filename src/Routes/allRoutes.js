import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Component/Auth/login";
import Signup from "../Component/Auth/student-signup";
import GetAllSkills from "../Component/Skill/get-All-Skills";
const Routeslist = () => {
  return (
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
      </ul>
    </nav>
  );
};

const Home = () => <h1>Home</h1>;

const AllRoutes = () => {
  return (
    <Router>
      <Routeslist />
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/createUser">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default AllRoutes;
