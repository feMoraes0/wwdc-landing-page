import React from 'react';
import './Home.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Infos from './components/Infos';
import Footer from './components/Footer';

const Home = () => {
  return (
    <main>
      <Navbar />
      <div style={{ marginBottom: '58px' }} />
      <Hero />
      <div style={{ marginBottom: '125px' }} />
      <Infos />
      <div style={{ marginBottom: '65px' }} />
      <Footer />
    </main>
  );
}

export default Home;