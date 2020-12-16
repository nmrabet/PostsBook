import React from "react";
import Posts from "./components/Posts";
import Profile from './components/Profile';
import "./App.css";
import PostDetails from "./components/PostDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Albums from "./components/Albums";

function App() {
  return (
    <div className='app'>
      <h1 className='title'>PostsBook</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Profile}/>
          <Route path='/albums' component={Albums}/>
          <Route path='/posts' component={Posts} />
          <Route path='/posts/:postId' component={PostDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
