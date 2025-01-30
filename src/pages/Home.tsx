import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Rewards from '../components/Rewards';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="blog"><Blog /></div>
      <div id="rewards"><Rewards /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

export default Home;