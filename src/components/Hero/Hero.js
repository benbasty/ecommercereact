import './hero.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <section id="hero">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>Save more with coupons and up to 70% off!</p>
            <button><Link to='/ecommercereact/shop'>Shop Now</Link></button>
        </section>
    )
} 
export default Hero;