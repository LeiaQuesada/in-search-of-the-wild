import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Sightings from "./components/Sightings";
import AddSighting from "./components/AddSighting";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/addsighting">Add Sighting</Link>
            </li>
            <li>
              <Link to="/sightings">Sightings</Link>
            </li>
            <li>
              <Link to="/species">Species</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/addsighting">
            <AddSighting />
          </Route>
          <Route path="/sightings">
            <Sightings />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
