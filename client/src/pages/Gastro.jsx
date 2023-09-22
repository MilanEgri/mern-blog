import React, { useEffect,useState } from 'react'
import Post from '../commponents/Post';



const Gastro = () => {
  const[posts,setPosts] = useState([]);
  useEffect(() =>{
        fetch('http://localhost:4400/post-gastro').then(response =>{
          response.json().then( posts =>{
            setPosts(posts)
          })
        })
  },[])
  return (
    <> 
     { posts.length >0&& posts.map(post =>(
      <Post key={post._id} {...post} />
     ))}
  </>
  )
}

export default Gastro
