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
        <Route path='/ecommercereact' element={<LandingPage />} />
        <Route path='/ecommercereact/shop' element={<Shop />} />
        <Route path='/ecommercereact/shop/productPage' element={<ProductPage />} />
        <Route path='/ecommercereact/blog' element={<Blog />} />
        <Route path='/ecommercereact/about' element={<About />} />
        <Route path='/ecommercereact/contact' element={<Contact />} />
        <Route path='/ecommercereact/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
