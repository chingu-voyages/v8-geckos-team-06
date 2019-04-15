import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import RegisterForm from './RegisterForm.js';

import './Register.css';

const Register = ({ token }) => {
  if ( !token ) {
    return (
      <main className="Register">
          <h3 className="register-title">Register</h3>
          <RegisterForm />
      </main>
    )
  } else {
    return (
      <Redirect to="/login" />
      )
  }
  }

export default Register;
