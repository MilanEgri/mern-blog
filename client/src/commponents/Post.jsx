import React from 'react'

const Post = () => {
  return (
    <div className='post'>
    <div className='img-contanier'>
      <img src='https://picsum.photos/1920/1080' alt='' />
    </div>
    <div className='texts'>
      <h2>This is the place for the title</h2>
      <p className='info'>
        <a className='author'>Milan Egri</a>
        <time>2023-09-18 20:33</time>
      </p>
      <p className='summary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis ac urna convallis. Vivamus id justo eu elit semper ultricies. Fusce sodales ante sit amet odio vulputate, a aliquam libero efficitur.</p>
    </div>
  </div>
  )
}

export default Post
