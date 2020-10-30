import React from 'react';
import { Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Profile from './screens/Profile'
import Appointments from './screens/Appointments'
require('typeface-rubik')

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Profile} />
        <Route path="/appointments" component={Appointments} />
      </div>
    </Router>
  );
}

export default App;
