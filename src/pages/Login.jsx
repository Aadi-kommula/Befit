import React, { useState } from 'react'
import style from '../styles/Register.module.css'
import { Button } from '@mui/material'
import { signInWithEmailAndPassword  } from "firebase/auth";
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = (e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
      navigate("/befit")
    })
    .catch((error)=>{
      alert("Invalid credentials")
    })
}
  return (
    <div className={style.container}>
      <div className={style.form}>
        <form action="post">
          <div className={style.form_body}>
            <h1>Login</h1>

            <label htmlFor="Email">Email</label>
            <input
              placeholder='Enter your Email '
              type="email"
              id="Email"
              name="Email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required />

            <label htmlFor="Password">Password</label>
            <input
              placeholder='Enter your Password '
              type="password"
              id="Password"
              name="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }} />

            <div className={style.remember}>
              <input type="checkbox" name="tcik" id="tick" />
              <label htmlFor="Remember">&nbsp;&nbsp;Remember me</label>
            </div>
            <Button
              variant='contained'
              color='success'
              onClick={onLogin}>Login</Button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Login;