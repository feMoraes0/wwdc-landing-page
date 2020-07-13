import React from 'react';
import './Home.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Home = () => {
  return (
    <main>
      <Navbar />
      <div style={{ marginBottom: '58px' }} />
      <Hero />
    </main>
  );
}

export default Home;