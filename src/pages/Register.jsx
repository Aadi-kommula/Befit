import React, { useState } from 'react'
import style from '../styles/Register.module.css'
import { Button } from '@mui/material'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible]= useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    await
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setVisible(true)
        })
  }
  return (
    <div className={style.container}>
      <div className={style.form}>
        <form action="post">
          {/* pop-up modal for  */}
          {visible ?
          <div className={style.popup_modal} >
           <h2>Registration Successfull ✅ </h2>
            <p>{name} &nbsp;You can login now</p>
            <Button 
            variant='contained' 
            color='success'
            onClick={()=>{
              navigate('/login')
            }}>Login</Button>
          </div>
          :

          <div className={style.form_body}>
            <h1>Sign in</h1>
            <label htmlFor="Email">Name</label>
            <input
              placeholder='Enter your Name '
              type="text"
              id="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value)
              }}
              required />
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
              onClick={onSubmit}>Register</Button>
            <div className={style.login}>
              <p>Already have an account &nbsp;</p>
              <NavLink to="/login"> Login</NavLink>
            </div>
          </div>
}
        </form>
      </div>
    </div>
            
  )
}


export default Register;