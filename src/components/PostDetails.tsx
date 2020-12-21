import React, { useState, useEffect } from "react";
import { Comment, Post } from "types";
import { useParams } from "react-router-dom";
import "./postDetails.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function PostDetails() {
  const params = useParams<{ postId: string }>();

  const [comments, setComments] = useState<Comment[]>([]);
  const [post, setPost] = useState<Post>();

  const urlPost = "https://jsonplaceholder.typicode.com/posts/" + params.postId;

  const url =
    "https://jsonplaceholder.typicode.com/comments?postId=" + params.postId;

  useEffect(() => {
    fetch(urlPost)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Comment[]) => setComments(data));
  }, [url]);

  return (
    <div className='post-details'>
      <div className='post-content'>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h3>{post.body}</h3>
        </div>
      </div>
      <div>
        <Form>
          <FormGroup className='form'>
            <Label>Email</Label>
            <Input
              type='text'
              name='email'
              placeholder='Enter your Email'
              required
            ></Input>
            <Label>Text</Label>
            <textarea name='text' placeholder='Enter text' required></textarea>
            <Button type='submit' className='btn'>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
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
