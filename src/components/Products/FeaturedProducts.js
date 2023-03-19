import './featuredProducts.css';
import React from 'react';
import {AiFillStar, AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/products/f1.jpg';
import img2 from '../../assets/img/products/f2.jpg';
import img3 from '../../assets/img/products/f3.jpg';
import img4 from '../../assets/img/products/f4.jpg';
import img5 from '../../assets/img/products/f5.jpg';
import img6 from '../../assets/img/products/f6.jpg';
import img7 from '../../assets/img/products/f7.jpg';
import img8 from '../../assets/img/products/f8.jpg';

const products = [
    {
        id : 1,
        image : img1,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 2,
        image : img2,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 3,
        image : img3,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 4,
        image : img4,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 5,
        image : img5,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 6,
        image : img6,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 7,
        image : img7,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 8,
        image : img8,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    }

]

function FeaturedProducts() {
    return(
        <section id='featuredProducts' className='section-p1'>
            <h2>Featured Products</h2>
            <p>Summer Collection New Arrival Design</p>
            <div className='product-container'>
                    {
                        products.map(({id,image,brand,title,reviews,price}) => {
                            return(
                                <div key={id} className='product'>
                                    <Link to='/ecommerce/shop/productPage'><img src={image} alt='product'/></Link>
                                    <div className='description'>
                                        <span>{brand}</span>
                                        <h5>{title}</h5>
                                        <div className='stars'>
                                            {reviews}
                                        </div>
                                        <h4>{price}</h4>
                                    </div>
                                    <a href='#shoppingcart' className='cart'><AiOutlineShoppingCart /></a>
                                </div>
                            )
                        })
                    }              
            </div>
        </section>
    )
}
export default FeaturedProducts;