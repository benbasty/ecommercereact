import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Feature from './components/Features/Feature';
import FeaturedProducts  from './components/Products/FeaturedProducts';
import Banner from './components/Banner/Banner';
import NewArrival from './components/New Arrival/NewArrival';
import SmallBanners from './components/SmallBanners/smallBanners';
import TextBanners from './components/TextBanners/TextBanners';
import NewsLetter from './components/NewsLetter/NewsLetter';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <FeaturedProducts />
      <Banner />
      <NewArrival />
      <SmallBanners />
      <TextBanners />
      <NewsLetter />
    </div>
    
  );
}

export default App;
