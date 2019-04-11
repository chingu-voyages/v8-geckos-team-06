import React from 'react';
import './NavBar.css';


const NavBar = ({ onRouteChange }) => {
  return (
    <nav className='Nav'>
      <ul>
        <li className='signin' onClick={() => onRouteChange('signin')} >Log In</li>
        <li className='register' onClick={() => onRouteChange('register')} >Register</li>
      </ul>
    </nav>
  )
}

export default NavBar;
