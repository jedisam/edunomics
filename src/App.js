import React from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/Layout/Landing/Landing";
import Signup from "./components/Layout/signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
