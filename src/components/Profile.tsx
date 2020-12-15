import React from "react";
import "./profile.css";
import userphoto from "../assets/userphoto.jpg";

export default function Profile() {
  return (
    <div>
      <h1 className='title'>PostsBook</h1>
      <div className='navbar'>
        <ul className='nav-list'>
          <li>Home</li>
          <li>Posts</li>
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
