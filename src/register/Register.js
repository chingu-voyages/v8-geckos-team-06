import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <main className="Register">
      <form className="form">

        <h3 className="form-title">Register</h3>

        <div id="sign_up" className="sign_up">

          <div className="input-container">
            <label className="name" htmlFor="name">Name</label>
            <input className="form-input" type="text" name="name"  id="name" />
          </div>

          <div className="input-container">
            <label className="email" htmlFor="email">Email</label>
            <input className="form-input" type="email" name="email"  id="email" />
          </div>

          <div className="input-container">
            <label className="password" htmlFor="password">Password</label>
            <input className="form-input" type="password" name="password"  id="password" />
          </div>

          <div className="input-container">
            <label className="confirm-password" htmlFor="confirm-password">Confirm Password</label>
            <input className="form-input" type="password" name="confirm-password"  id="confirm-password" />
          </div>

        </div>

        <div className="form-buttons">
          <input onClick={() => onRouteChange('home')} className="register-btn" type="submit" value="Sign Up" />
        </div>

        <div className="form-links">
          <p onClick={() => onRouteChange('home')} className="form-link">Home </p>

        </div>
      </form>
    </main>
  );
}

export default Register;
