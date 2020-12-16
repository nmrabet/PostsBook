import React, { useState, useEffect } from "react";
import "./posts.css";
import { Post } from "../types";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    }, 5000);
  });

  return (
    <div className='posts'>
      <h2 className='subtitle'> Posts </h2>
      {posts.map((post) => {
        return (
          <div key={post.userId}>
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
