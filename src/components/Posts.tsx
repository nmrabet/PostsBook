import React, { useState, useEffect } from "react";
import "./posts.css";
import { Post } from "../types";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Post[]) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <h1 className='title'>PostsBook</h1>
      {posts.map((post) => {
        return (
          <div>
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
