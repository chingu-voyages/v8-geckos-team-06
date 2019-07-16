import React from 'react';
import './Login.css';
import LoginForm from './LoginForm.js';
import { Redirect } from 'react-router-dom'


const Login = ({ isLogged }) => {
  if (!isLogged) {
    return (
      <main className="Signin">
        <h3 className="signin-title">Log In</h3>
        <LoginForm />
      </main>
    );
  } else {
    return (
      <Redirect to='/dashboard' />
      )
    }
}


export default Login;
