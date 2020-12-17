import React, { useState, useEffect } from "react";
import './todos.css';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, [url]);
  console.log(todos);

  return (
    <div className='todos'>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className='todos-container'>
            <input
              type='checkbox'
              defaultChecked={todo.completed}
            />
            <span className='todo-title'>{todo.title}</span>
          </div>
        );
      })}
    </div>
  );
}
