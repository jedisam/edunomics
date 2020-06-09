import React from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/Layout/Landing/Landing";
import Signup from "./components/Layout/signup/Signup";
import Login from "./components/Layout/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
