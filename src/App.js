import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Sightings from "./components/Sightings";
import AddSighting from "./components/AddSighting";

function App() {
  return (
    <Router>
      <div>
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
