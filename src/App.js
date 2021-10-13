import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavHeader from "./components/NavHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <NavHeader />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
