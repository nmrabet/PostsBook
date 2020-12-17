import React, { useState, useEffect } from "react";
import "./users.css";
import { IUser } from "types";

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: IUser[]) => {
        setUsers(data);
      });
  }, [url]);

  return (
    <div className='users-component'>
      <h2 className='subtitle'>Friends</h2>
      {users.map((user) => {
        return (
          <div key={user.id} className='user-container'>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h4>
              {user.address.street}, {user.address.suite} {user.address.city} -{" "}
              {user.address.zipcode}
            </h4>
            <h4>{user.phone}</h4>
            <h5>
              {user.company.name} : "{user.company.catchPhrase}"
            </h5>
          </div>
        );
      })}
    </div>
  );
}
