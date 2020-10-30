import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Profile from './screens/Profile'
import Appointments from './screens/Appointments'
require('typeface-rubik')

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <div className="app">
        <Route path="/appointments" component={Appointments} />
        <Route exact path="/" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
