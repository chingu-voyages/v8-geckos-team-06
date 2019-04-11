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
        {/* <form className="login-form"> */}
        <h3 className="signin-title">Log In</h3>
        {/*   <div id="sign_in" className="sign_in"> */}
        {/*     <div className="login-input-container"> */}
        {/*       <input className="login-form-input" type="email" name="email"  id="email" placeholder="enter your email address" required */}
        {/*         onChange={this.onLoginInputChange}/> */}
        {/*       <label className="email" htmlFor="email">Email</label> */}
        {/*     </div> */}
        {/*     <div className="login-input-container"> */}
        {/*       <input className="login-form-input" type="password" name="password"  id="password" placeholder="enter your password" required/> */}
        {/*       <label className="password" htmlFor="password">Password</label> */}
        {/*     </div> */}
        {/*   </div> */}
        {/*   <div className="form-buttons"> */}
        {/*     <input className="login-btn" type="submit" value="Log In" /> */}
        {/*   </div> */}
        {/*   <div className="form-links"> */}
        {/*    <NavLink  to="/register">Register</NavLink> */}
        {/*    <NavLink to="">Home</NavLink> */}
        {/*   </div> */}
        {/* </form> */}
        <LoginForm />
        <Link to="">Home</Link>
      </main>
    );

  }
}


export default Login;
