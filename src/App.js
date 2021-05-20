import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
      <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
            </Switch>
      </Router>
  );
}

export default App;
