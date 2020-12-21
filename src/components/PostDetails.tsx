import React, { useState, useEffect } from "react";
import { Comment, Post } from "types";
import { useParams } from "react-router-dom";
import "./postDetails.css";

export default function PostDetails() {
  const params = useParams<{ postId: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [post, setPost] = useState<Post | null>();
  // const [email, setEmail] = useState('');
  // const [body, setBody] = useState('');

  const urlPost = "https://jsonplaceholder.typicode.com/posts/" + params.postId;
  const url =
    "https://jsonplaceholder.typicode.com/comments?postId=" + params.postId;

  useEffect(() => {
    fetch(urlPost)
      .then((res) => res.json())
      .then((data) => setPost(data));
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Comment[]) => setComments(data));
  }, [url]);

  return (
    <div className='postDetails'>
      {post && (
        <div className='post-content' style={{margin: "0 auto",textAlign:'center', width: "60%"}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}

      <div className='comments'>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <h4>{comment.email}</h4>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
