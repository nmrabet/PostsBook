import React, { useState, useEffect } from "react";
import { Comment, Post } from "types";
import { useParams } from "react-router-dom";
import './postDetails.css';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export default function PostDetails() {
  const params = useParams<{ postId: string }>();

  const [comments, setComments] = useState<Comment[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  const urlPosts = "https://jsonplaceholder.typicode.com/posts";

  const url =
    "https://jsonplaceholder.typicode.com/comments?postId=" + params.postId;

  console.log("Render");

  useEffect(() => {
    fetch(urlPosts)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [urlPosts]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Comment[]) => setComments(data));
  }, [url]);

function filter(id) {
  return posts.filter((post) => post.id === id)
}
let item = filter(1)
console.log(item)

  return (
    <div className='post-details'>
      <div>
      <Form>
      <FormGroup className='form'>
        <Label>Email</Label>
        <Input type="text" name="email" placeholder="Enter your Email" required></Input>
        <Label>Text</Label>
        <textarea name="text" placeholder="Enter text" required></textarea>
      <Button type="submit" className='btn'>Submit</Button>
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
