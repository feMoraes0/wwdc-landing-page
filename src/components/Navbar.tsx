import React from 'react';
import './Navbar.css';
import logo from '../assets/wwdc-logo.svg';

const Navbar = () => (
  <nav id='navbar'>
    <img src={logo} alt="logo"/>
    <ul>
      <li className='active'>Overview</li>
      <li>Sessions</li>
      <li>Sample Code</li>
      <li>Forums</li>
      <li>Labs</li>
      <li>
        <button type='button'>Download the app</button>
      </li>
    </ul>
  </nav>
);

export default Navbar;