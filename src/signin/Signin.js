import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
  return (
    <main className="Signin">
      <form className="measure center">
        <fieldset
          id="sign_up"
        className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label
              className="db fw6 lh-copy f6"
            for="email-address">
              Email
            </label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" for="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
          </div>
        </fieldset>
        <div className="">
          <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" type="submit" value="Sign in" />
        </div>
        <div className="lh-copy mt3">
          <p onClick={() => onRouteChange('register')} className="f6 link dim black db">Register </p>
        </div>
      </form>
    </main>
  );
}

export default Signin;
