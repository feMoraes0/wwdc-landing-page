import React from 'react';
import './Hero.css';
import playOutline from '../assets/icons/play-outline.svg';
import backgroundImage1 from '../assets/background-image-1.png';
import backgroundImage2 from '../assets/background-image-2.png';
import backgroundImage3 from '../assets/background-image-3.png';

const Hero = () => (
  <section id='hero'>
    <h1>Full stream ahead.</h1>
    <h6>
      It’s on now. Join us for a WWDC like never before — with a jam-packed,
      all-online experience coming to you from Apple Park. And there’s still a
      lot more to come.
    </h6>
    <a href="/">
      Watch the Day 5 Recap
      <img src={playOutline} alt="play outline icon"/>
    </a>
    <div className='background-images'>
      <img src={backgroundImage1} alt="background-1"/>
      <img src={backgroundImage2} alt="background-2"/>
      <img src={backgroundImage3} alt="background-3"/>
    </div>
  </section>
);

export default Hero;