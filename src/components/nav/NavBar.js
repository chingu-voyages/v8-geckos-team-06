import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className='Nav'>
      <ul>
        <li className='signin'><NavLink to="login">Log in</NavLink></li>
        <li className='register'><NavLink to="register">Register</NavLink> </li>
      </ul>
    </nav>
  )
}

export default NavBar;
