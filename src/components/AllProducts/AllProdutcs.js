import React, { useState } from 'react';
import {AiFillStar, AiOutlineShoppingCart} from 'react-icons/ai';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import './AllProducts.css';

import img1 from '../../assets/img/products/n1.jpg';
import img2 from '../../assets/img/products/n2.jpg';
import img3 from '../../assets/img/products/n3.jpg';
import img4 from '../../assets/img/products/n4.jpg';
import img5 from '../../assets/img/products/n5.jpg';
import img6 from '../../assets/img/products/n6.jpg';
import img7 from '../../assets/img/products/n7.jpg';
import img8 from '../../assets/img/products/n8.jpg';
import img9 from '../../assets/img/products/f1.jpg';
import img10 from '../../assets/img/products/f2.jpg';
import img11 from '../../assets/img/products/f3.jpg';
import img12 from '../../assets/img/products/f4.jpg';
import img13 from '../../assets/img/products/f5.jpg';
import img14 from '../../assets/img/products/f6.jpg';
import img15 from '../../assets/img/products/f7.jpg';
import img16 from '../../assets/img/products/f8.jpg';

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
    },
    {
        id : 9,
        image : img9,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 10,
        image : img10,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 11,
        image : img11,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 12,
        image : img12,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 13,
        image : img13,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 14,
        image : img14,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 15,
        image : img15,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    },
    {
        id : 16,
        image : img16,
        brand: 'adidas',
        title: 'Cartoon Astronaut T-shirts',
        reviews: <div><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>,
        price: '$78'
    }

]

const AllProducts = () => {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };
    return(
        <div>
            <section id='featuredProducts' className='section-p1'>
                <div className='product-container'>
                        {
                            currentItems.map(({id,image,brand,title,reviews,price}) => {
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
            <section id="paginate">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<BsFillArrowRightCircleFill/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={<BsFillArrowLeftCircleFill/>}
                    renderOnZeroPageCount={null}
                    containerClassName="pagesContainer"
                    pageLinkClassName='page'
                    previousLinkClassName='arrow'
                    nextLinkClassName='arrow'
                    activeLinkClassName='currentPage'
                />
            </section>

        </div>
    )
}
export default AllProducts;