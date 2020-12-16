import React, { useState, useEffect } from "react";
import "./posts.css";
import { Post } from "../types";
import { Link } from "react-router-dom";
import SkeletonElement from "../skeletons/skeletonElement";

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
      <SkeletonElement type='title' />
      <SkeletonElement type='text' />
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.userId}>
              <Link to={`/posts/${post.id}`}>
                <h3 key={post.title}>{post.title}</h3>
              </Link>
              <p key={post.body}>{post.body}</p>
            </div>
          );
        })}

      {!posts && <div>Loading...</div>}
    </div>
  );
}
