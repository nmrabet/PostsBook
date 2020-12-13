import React from "react";
import Posts from "./components/Posts";
import "./App.css";
import Comments from "./components/Comments";
import { BrowserRouter as Router } from "react-router-dom";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/posts'><Posts /></Route>
          <Route path='/comments'><Comments /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
