import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Shop from './components/Shop/shop';
import Footer from './components/Footer/Footer';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/ecommerce' element={<LandingPage />} />
        <Route path='/ecommerce/shop' element={<Shop />}/>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
