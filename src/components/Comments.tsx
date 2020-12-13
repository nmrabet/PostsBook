import React, {useState, useEffect} from 'react'

export default function Comments() {
  const [comments, setComments] = useState([])

  const url= "https://jsonplaceholder.typicode.com/comments"
  
  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
}, [])

  console.log(comments);

  const allComments = comments.map(comment => 
    <div className='posts'>
        <h4 key={comment.id}>{comment.name}</h4>
        <h4 key={comment.email}>{comment.email}</h4>
        <p key={comment.body}>{comment.body}</p>
    </div>)


return (
  <div>
    <h1 className="title">PostsBook</h1>
    {allComments}
  </div>
)
}