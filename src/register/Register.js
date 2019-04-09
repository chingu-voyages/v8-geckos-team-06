import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <main className="Register">
      <form className="form">

        <h3 className="register-title">Register</h3>
        {/* <div className="pill-wrapper">
          <div className="pill-icon"></div>
        </div> */}

        <div id="sign_up" className="sign_up">

          <div className="input-container">
            <input className="form-input input-filled" type="text" name="name"  id="name" placeholder="John Doe" required/>
            <label className="name" htmlFor="name">Name</label>
          </div>

          <div className="input-container">
            <input className="form-input" type="email" name="email"  id="email" placeholder="john@doe.com" required/>
            <label className="email" htmlFor="email">Email</label>
          </div>

          <div className="input-container">
            <input className="form-input" type="password" name="password"  id="password" placeholder="type your password" required/>
            <label className="password" htmlFor="password">Password</label>
          </div>

          <div className="input-container">
            <input className="form-input" type="password" name="confirm-password"  id="confirm-password" placeholder="re-type your password" required/>
            <label className="confirm-password" htmlFor="confirm-password">Confirm Password</label>
          </div>

          <div className="tos-container">
            <input className="tos" type="checkbox" name="tos"/>
            <label htmlFor="tos">I agree to the <span>Terms & Conditions</span></label>
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
