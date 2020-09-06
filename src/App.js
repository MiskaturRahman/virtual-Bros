import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import StatusDetail from './Components/StatusDetail/StatusDetail';
import './App.css';


const App = () => {
  return (
    <Router className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route exact path="/"><Home /></Route>
        <Route path="/status/:statusId"><StatusDetail /></Route>
        <Route path="*"><NoMatch /></Route>

      </Switch>
    </Router>
  );
};

export default App;