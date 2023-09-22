import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import hu from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import { UserContext } from '../UserContext'
import {BsPencilSquare} from 'react-icons/bs'



const PostPage = () => {
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null)
  const createdAtTimestamp = new Date(postInfo?.createdAt).getTime();
  useEffect(() => {
    fetch(`http://localhost:4400/post/${id}`).then(response => {
      response.json().then(postInfo => {
        setPostInfo(postInfo)
      })
    })
  }, [])
  if (!postInfo) return '';
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time><ReactTimeAgo date={createdAtTimestamp} locale="hu" /></time>
      <div className='author'> by @{postInfo.author.name}</div>
      {userInfo.id === postInfo.author._id && (
        <div className='edit-row'>
          <Link to={`/edit/${postInfo._id}`} className='edit-btn' >Edit this post  <BsPencilSquare /></Link>
          
        </div>
      )
      }
      <div className="image">
        <img src={`http://localhost:4400/${postInfo.file}`} alt="" />
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div >
  )
}

export default PostPage
