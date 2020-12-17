import React from "react";
import Posts from "./components/Posts";
import Profile from './components/Profile';
import "./App.css";
import PostDetails from "./components/PostDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Link} from 'react-router-dom';
import Albums from "./components/Albums";
import AlbumsDetails from "./components/AlbumsDetails";
import Todos from './components/Todos';

function App() {
  return (
    <div className='app'>
      <Router>
      <Link to='/' style={{ textDecoration: 'none' }}><h1 className='title'>PostsBook</h1></Link>
        <Switch>
          <Route exact path="/" component={Profile}/>
          <Route path='/albums/:userId' component={AlbumsDetails} />
          <Route path='/albums' component={Albums}/>
          <Route path='/posts/:postId' component={PostDetails} />
          <Route path='/posts' component={Posts} />
          <Route path='/todos' component={Todos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
