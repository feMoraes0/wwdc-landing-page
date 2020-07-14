import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className='top'>
      <div className='breadcrumb'>
        <p>Developer</p>
        <p className='indicator'>{'>'}</p>
        <p className='current'>WWDC20</p>
      </div>
      <span>To view the latest developer news, <a href="/">visit News and Updates</a>.</span>
    </div>
    <div className='bottom'>
      <p>Copyright © 2020 Apple Inc. All rights reserved.</p>
      <div>
        <p>Term of Use</p>
        <p>Privacy Policy</p>
        <p>License Agreements</p>
      </div>
    </div>
  </footer>
);

export default Footer;