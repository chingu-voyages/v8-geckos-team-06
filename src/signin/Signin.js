import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
  return (
    <main className="Signin">
      <form className="form">

        <h3 className="signin-title">Log In</h3>

        <div id="sign_in" className="sign_in">

          <div className="login-input-container">
            <input className="login-form-input" type="email" name="email"  id="email" placeholder="enter your email address"/>
            <label className="email" htmlFor="email">Email</label>
          </div>

          <div className="login-input-container">
            <input className="login-form-input" type="password" name="password"  id="password" placeholder="enter your password"/>
            <label className="password" htmlFor="password">Password</label>
          </div>

        </div>

        <div className="form-buttons">
          <input onClick={() => onRouteChange('home')} className="login-btn" type="submit" value="Log In" />
        </div>

        <div className="form-links">
          <p onClick={() => onRouteChange('register')} className="rgstr-link">Register </p>
          <p onClick={() => onRouteChange('home')} className="form-link">Home </p>

        </div>
      </form>
    </main>
  );
}

export default Signin;
