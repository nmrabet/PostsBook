import React from "react";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import "./App.css";
import PostDetails from "./components/PostDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Albums from "./components/Albums";
import AlbumsDetails from "./components/AlbumsDetails";
import Todos from "./components/Todos";
import Users from "./components/Users";
import Modal from './components/Modal';

function App() {
  return (
    <div className='app'>
      <Router>
        <Link to='/' style={{ textDecoration: "none" }}>
          <h1 className='title'>PostsBook</h1>
        </Link>
        <div className='navbar'>
          <ul className='nav-list'>
            <Link to='/' className='links'><li>Home</li></Link>
            <Link to='/posts' className='links'>
              <li>Posts</li>
            </Link>
            <Link to='/users' className='links'>
              <li>Friends</li>
            </Link>
            <Link to='/todos' className='links'>
              <li>Todos</li>
            </Link>
            <Link to='/albums' className='links'>
              <li>Albums</li>
            </Link>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' component={Profile} />
          <Route path='/albums/:id' component={AlbumsDetails} />
          {/* <Route path='/albums/:albumId' component={Photos} /> */}
          <Route path='/albums' component={Albums} />
          <Route path='/posts/:postId' component={PostDetails} />
          <Route path='/posts' component={Posts} />
          <Route path='/todos' component={Todos} />
          <Route path='/users' component={Users} />
          <Route path='/modal' component={Modal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
