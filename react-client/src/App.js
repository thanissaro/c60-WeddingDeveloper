import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const Register = () => <h2>Register</h2>;
const Users = () => <h2>Users</h2>;
const Events = () => <h2>Eventss</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./containers/routing/Register">Register</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/events/">Events</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/register/" component={Register} />
      <Route path="/users/" component={Users} />
      <Route path="/events/" component={Events} />
    </div>
  </Router>
);

export default AppRouter;

