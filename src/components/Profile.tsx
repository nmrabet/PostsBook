import React from "react";
import "./profile.css";
import userphoto from "../assets/userphoto.jpg";

export default function Profile() {
  return (
    <div>
      <div className='profile'>
        <img src={userphoto} alt='' className='img' />
        <h2 className='username'>Nesrine Mrabet</h2>
      </div>
    </div>
  );
}
