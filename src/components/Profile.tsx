import React from "react";
import "./profile.css";
import userphoto from "../assets/userphoto.jpg";
import {Link} from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <div className='navbar'>
        <ul className='nav-list'>
          <li>Home</li>
          <Link to='/posts' className='links'><li>Posts</li></Link>
          <li>Friends</li>
          <li>Todos</li>
          <li>Photos</li>
        </ul>
      </div>
      <div className='profile'>
        <img src={userphoto} alt='' className='img' />
        <h2 className='username'>Nesrine Mrabet</h2>
      </div>
    </div>
  );
}
