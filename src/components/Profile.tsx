import React from "react";
import "./profile.css";
import userphoto from "../assets/userphoto.jpg";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div className='navbar'>
        <ul className='nav-list'>
          <li>Home</li>
          <Link to='/posts' className='links'>
            <li>Posts</li>
          </Link>
          <Link to='/users' className='links'><li>Friends</li></Link>
          <Link to='/todos' className='links'><li>Todos</li></Link>
          <Link to='/albums' className='links'>
            <li>Albums</li>
          </Link>
        </ul>
      </div>
      <div className='profile'>
        <img src={userphoto} alt='' className='img' />
        <h2 className='username'>Nesrine Mrabet</h2>
      </div>
    </div>
  );
}
