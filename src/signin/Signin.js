import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
  return (
    <main className="Signin">
      <form className="form">

        <fieldset id="sign_in" className="sign_in">
          <legend className="form-title">Sign In</legend>

          <div className="input-container">
            <label className="email" htmlFor="email">Email</label>
            <input className="form-input" type="email" name="email"  id="email" />
          </div>

          <div className="input-container">
            <label className="password" htmlFor="password">Password</label>
            <input className="form-input" type="password" name="password"  id="password" />
          </div>

        </fieldset>

        <div className="form-buttons">
          <input onClick={() => onRouteChange('home')} className="login-btn" type="submit" value="Log In" />
        </div>

        <div className="form-links">
          <p onClick={() => onRouteChange('register')} className="form-link">Register </p>
          <p onClick={() => onRouteChange('home')} className="form-link">Home </p>

        </div>
      </form>
    </main>
  );
}

export default Signin;
