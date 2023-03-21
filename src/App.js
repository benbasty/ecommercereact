import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Shop from './components/Shop/shop';
import ProductPage from './components/Shop/ProductPage';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import {Routes, Route} from 'react-router-dom'
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/ecommerce' element={<LandingPage />} />
        <Route path='/ecommerce/shop' element={<Shop />} />
        <Route path='/ecommerce/shop/productPage' element={<ProductPage />} />
        <Route path='/ecommerce/blog' element={<Blog />} />
        <Route path='/ecommerce/about' element={<About />} />
        <Route path='/ecommerce/contact' element={<Contact />} />
        <Route path='/ecommerce/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
