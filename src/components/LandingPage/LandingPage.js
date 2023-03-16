import React from 'react'
import Hero from '../Hero/Hero';
import Feature from '../Features/Feature';
import FeaturedProducts  from '../Products/FeaturedProducts';
import Banner from '../Banner/Banner';
import NewArrival from '../New Arrival/NewArrival';
import SmallBanners from '../SmallBanners/smallBanners';
import TextBanners from '../TextBanners/TextBanners';
import NewsLetter from '../NewsLetter/NewsLetter';
const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <FeaturedProducts />
      <Banner />
      <NewArrival />
      <SmallBanners />
      <TextBanners />
      <NewsLetter />
    </div>
  )
}

export default LandingPage