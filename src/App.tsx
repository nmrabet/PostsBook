import React from "react";
import Posts from "./components/Posts";
import Profile from './components/Profile';
import "./App.css";
import PostDetails from "./components/PostDetails";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path="/" component={Profile}/>
          <Route path='/posts' component={Posts} />
          <Route path='/posts/:postId' component={PostDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
