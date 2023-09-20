import React, { useState } from 'react'


const Register = () => {
  const [name,setName] =useState("")
  const [password,setPasswrod] =useState("")
  async function register(e){
    e.preventDefault();
  const repsone =  await fetch('http://localhost:4400/register',{
      method: 'POST',
      body: JSON.stringify({name,password}),
      headers :{'Content-Type':'application/json'},
    });
    if(repsone.ok){
      alert("registration Succesfull")
    }else{
      alert("registration failed")
    }
  }
  return (
    <form className='register' onSubmit={register}>
      <h1>Register</h1>
      <input type='text'placeholder='username'value={name} onChange={e => setName(e.target.value)}/>
      <input type='password' placeholder='password' value={password} onChange={e => setPasswrod(e.target.value)}/>
      <button>Register</button>
    </form>
  )
}

export default Register
