import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from 'react-router';

import Home from './Home/Home';
import AnalysisReport from './AnalysisReport/AnalysisReport';
import logo from './logo.svg';
import './App.css';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/report/" component={AnalysisReport} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default App;
