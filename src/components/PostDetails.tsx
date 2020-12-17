import React, { useState, useEffect } from "react";
import { Comment } from "../types/comment";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const params = useParams<{ postId: string }>();

  const [comments, setComments] = useState<Comment[]>([]);

  const url =
    "https://jsonplaceholder.typicode.com/comments?postId=" + params.postId;

  console.log("Render");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Comment[]) => setComments(data));
  }, [url]);

  return (
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
  );
}
