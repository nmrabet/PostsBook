import React from "react";
import Posts from "./components/Posts";
import "./App.css";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/posts' component={Posts} />
          <Route path='/posts/:postsId' component={Comments} />
          <Redirect to='/posts' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
