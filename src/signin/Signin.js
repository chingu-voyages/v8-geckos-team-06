import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
  return (
    <main className="Signin">
      <form className="form">

        <fieldset id="sign_up" className="sign_up">
          <legend className="form-title">Sign In</legend>
          <div className="inputs-container">
            <label className="email" htmlFor="email">Email</label>
            <input className="form-input" type="email" name="email"  id="email" />
          </div>
          <div className="mv3">
            <label className="form-input" htmlFor="password">
              Password
            </label>
            <input className="form-input" type="password" name="password"  id="password" />
          </div>
        </fieldset>

        <div className="inputs-container">
          <input onClick={() => onRouteChange('home')} className="form-btn" type="submit" value="Sign in" />
        </div>

        <div className="lh-copy mt3 pointer">
          <p onClick={() => onRouteChange('register')} className="form-link">Register </p>
          <p onClick={() => onRouteChange('home')} className="form-link">Home </p>

        </div>
      </form>
    </main>
  );
}

export default Signin;
