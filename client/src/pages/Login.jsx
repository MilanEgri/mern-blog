import React, { useContext, useState } from 'react'
import {Navigate} from "react-router-dom"
import { UserContext } from '../UserContext'

const Login = () => {
  const [name,setName] =useState("")
  const [password,setPasswrod] =useState("")
  const [redirect,setRedirect] = useState(false)
  const {setUserInfo} =useContext(UserContext)
 async function login(e){
    e.preventDefault()
    const response = await fetch('http://localhost:4400/login',{
      method: 'POST',
      body: JSON.stringify({name,password}),
      headers :{'Content-Type':'application/json'},
      credentials:'include',
    });
    if(response.ok){
      response.json().then(userInfo =>{
        setUserInfo(userInfo)
        setRedirect(true) 
      })
    }
    else{
      alert('Wrong Password')
    }
  }
  if(redirect){
    
    return <Navigate to={'/'} />
  }
  return (
    <form className='login' onSubmit={login}>
      <h1>Login</h1>
      <input type='text'placeholder='username'value={name} onChange={e => setName(e.target.value)}/>
      <input type='password' placeholder='password' value={password} onChange={e => setPasswrod(e.target.value)}/>
      <button>Login</button>
    </form>
  )
}

export default Login
