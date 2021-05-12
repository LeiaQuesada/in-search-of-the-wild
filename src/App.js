import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Sightings from "./components/Sightings";
import AddSighting from "./components/AddSighting";
import Sighting from "./components/Sightings";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Router>
        <div>
          <Switch>
            <Route path="/addsighting">
              <AddSighting />
            </Route>
            <Route path="/individual/:individual_id">
              <Sighting />
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
    </div>
  );
}

export default App;
