import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import firebase from 'firebase/app'

import '../styles/Login.css'
import { setIsLoggedIn } from '../actions/idFor'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.idFor.isLoggedIn)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('res', res)
        dispatch(setIsLoggedIn(true))
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />
  }


  return (
    <div className="login-form-div">
      <form className="login-form" onSubmit={handleSubmit} >
        <h1 className="login-form-h1">Login</h1>
        <input
          className="email-input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input
          className="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button className="login-btn" type="submit" >Login</button>
      </form>
    </div>
  )
}

export default Login
