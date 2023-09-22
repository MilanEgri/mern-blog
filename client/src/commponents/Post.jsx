import React from 'react'
import TimeAgo from 'javascript-time-ago'

import hu from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom';
TimeAgo.addDefaultLocale(hu);

const Post = ({ _id,title, summary, createdAt, author, file }) => {

  const createdAtTimestamp = new Date(createdAt).getTime();

  return (
    <Link to={`/post/${_id}`} className='post'>
      <div className='img-contanier'>
        <img src={`http://localhost:4400/${file}`} alt='' />
      </div>
      <div className='texts'>
        <h2>{title}</h2>
        <div className='info'>
          <p className='author'>{author.name}</p>
          <time><ReactTimeAgo date={createdAtTimestamp} locale="hu" /></time>
        </div>
        <p className='summary'>{summary}</p>
      </div>
    </Link>
  )
}

export default Post
