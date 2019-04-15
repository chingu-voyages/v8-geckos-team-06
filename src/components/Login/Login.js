import React from 'react';
import './Signin.css';
import LoginForm from './LoginForm.js';
import { Link } from 'react-router-dom'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }


  render() {
    return (
      <main className="Signin">
        <h3 className="signin-title">Log In</h3>
        <LoginForm />
      </main>
    );

  }
}


export default Login;
