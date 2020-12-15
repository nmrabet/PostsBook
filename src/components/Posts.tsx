import React, {useState, useEffect} from 'react'
import './posts.css';
import {Link} from 'react-router-dom';

export default function Posts() {
  const [data, setData] = useState([])

  const url= "https://jsonplaceholder.typicode.com/posts"
  
  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
}, [])

  console.log(data);

  const allData = data.map(post => 
      <div className='posts'>
          <Link to={`/posts/${post._id}`}><h4 key={post.title}>{post.title}</h4></Link>
          <p key={post.body}>{post.body}</p>
      </div>)
  
  
  return (
    <div>
      <h1 className="title">PostsBook</h1>
      {allData}
    </div>
  )
}
