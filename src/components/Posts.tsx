import React, { useState, useEffect } from "react";
import "./posts.css";
import Modal from "react-modal";
import { Post } from "types";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Title: ", title);
    console.log("Body: ", body);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
  };

  return (
    <div className='posts'>
      <button onClick={(e) => setIsOpen(true)}>Add Post</button>
      <h2 className='subtitle'> Posts </h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </div>
        );
      })}
      <Modal isOpen={isOpen}>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <input
            type='text'
            placeholder='Body'
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
          <button type='submit' disabled={title === "" || body === ""}>
            Create Post
          </button>
        </form>
      </Modal>
    </div>
  );
}
