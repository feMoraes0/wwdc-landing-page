import React from 'react';
import './Infos.css';
import presentation from '../assets/icons/presentation.png';
import InfoCard from './InfoCard';

const Infos = () => (
  <main id='infos'>
    <InfoCard icon={presentation} title='Special Event Keynote and<br/>Platforms State of the Union'>
      <p>The Apple Worldwide Developers Conference kicks off with exciting reveals, inspiration, and new opportunities to continue creating the most innovative apps in the world. Join the worldwide developer community for an in-depth look at the future of Apple platforms, directly from Apple Park.</p>
      <p>Special Event Keynote</p>
      <span>June 22, 10 a.m. PDT</span>
      <p>Platforms State of the Union</p>
      <span>June 22, 2 p.m. PDT</span>
    </InfoCard>
  </main>
);

export default Infos;