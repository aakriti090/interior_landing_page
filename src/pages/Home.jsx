import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import NewArrivals from '../components/NewArrivals';
import Collections from '../components/Collections';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <NewArrivals />
      <Collections />
      <Footer />
    </>
  );
}

export default Home;
