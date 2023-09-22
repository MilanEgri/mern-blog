import React, { useEffect, useContext } from 'react'
import {Link} from "react-router-dom"

import { UserContext } from '../UserContext'

const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext)
  useEffect(() =>{
      fetch('http://localhost:4400/profile',{
        credentials: 'include'
      }).then(response =>{
        response.json().then(userInfo =>{
          setUserInfo(userInfo)
        })
      })
  },[])
  function logout(){
    fetch('http://localhost:4400/logout',{
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
  }
  const name = userInfo?.name
  return (
    <header>
    <Link to={"/"} className='logo'>MernBlog</Link>
    <nav>
      {name? 
      <>
      <Link to="/create">Create new post</Link>
      <a style={{cursor:'pointer'}} onClick={logout}>Logout</a>
      </>  
      : <> 
      <Link to={"login"}>Login</Link>
      <Link to={"register"}>Register</Link>
      </>}
    </nav>
  </header>
  )
}

export default Header
