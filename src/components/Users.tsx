import React, { useState, useEffect } from "react";
import './users.css'
export default function Users() {
  const [users, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [url]);

  return <div className='users-component'>
      {users.map((user) => {
          return <div key={user.id} className='user-container'>
              <h2>{user.name}</h2>
              <h3>{user.username}</h3>
              <h3>{user.email}</h3>
              <p>{user.address.street}, {user.address.suite} - {user.address.city}, {user.address.zipcode}</p>
          </div>
      })}
  </div>;
}
