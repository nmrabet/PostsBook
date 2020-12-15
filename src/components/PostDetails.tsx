import React, { useState, useEffect } from "react";
import { Comment } from "../types/comment";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const params = useParams<{ postId: string }>();
  console.log(params);

  const [comments, setComments] = useState<Comment[]>([]);

  const url =
    "https://jsonplaceholder.typicode.com/comments?postId=" + params.postId;

  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Comment[]) => {
        setComments(data);
      })
  }, [url]);

  return (
    <div className='comments'>
      {comments.map((comment) => {
        return (
          <div>
            <h4 key={comment.id}>{comment.id}</h4>
            <h4 key={comment.email}>{comment.email}</h4>
            <p key={comment.body}>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}
