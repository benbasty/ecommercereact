import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import BlogHeader from '../BlogHeader/BlogHeader';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import './Blog.css'
import blog1 from '../../assets/img/blog/b1.jpg'
import blog2 from '../../assets/img/blog/b2.jpg'
import blog3 from '../../assets/img/blog/b3.jpg'
import blog4 from '../../assets/img/blog/b4.jpg'
import blog5 from '../../assets/img/blog/b5.jpg'
import blog6 from '../../assets/img/blog/b6.jpg'
import blog7 from '../../assets/img/blog/b7.jpg'

const blogs = [
    {
        image: blog1,
        date: '16/01',
        title: 'The Cotton-jersey Zip-Up Hoodie',
        description: 'Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr worl chartreuse hexagin irony. godard ...'
    },
    {
        image: blog2,
        date: '10/02',
        title: 'How to style a Quiff',
        description: 'Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr worl chartreuse hexagin irony. godard ...'
    },
    {
        image: blog3,
        date: '15/03',
        title: 'Must-Have Skater Girl Items',
        description: 'Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr worl chartreuse hexagin irony. godard ...'
    },
    {
        image:blog4,
        date: '12/04',
        title: 'Runway-Inspired Trends',
        description: 'Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr worl chartreuse hexagin irony. godard ...'
    },
    {
        image: blog5,
        date: '11/05',
        title: 'AW20 Menswear Trends',
        description: 'Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr worl chartreuse hexagin irony. godard ...'
    },
    {
        image: blog6,
        date: '10/06',
        title: 'Expressing yourself and letting go',
        description: 'Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr worl chartreuse hexagin irony. godard ...'
    },
    {
        image: blog7,
        date: '10/07',
        title: 'Summer Swim 2023 Collection',
        description: 'Kickstarter man braid godard coloring book. Raclette waiscoat selfies yr worl chartreuse hexagin irony. godard ...'
    }

]

const Blog = () => {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = blogs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blogs.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };

    return(
        <>
            <BlogHeader />
            <section id='blogs' className='section-p1'>
                <div className='blogPosts'>
                {
                    currentItems.map(({image, date, title, description}) => {
                        return(
                            <div className='blogPost'>
                                <div className='imageDate'>
                                    <span>{date}</span>
                                    <img src={image} alt="blogPost"/>
                                </div>
                                <div className='details'>
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                    <a href="#read">Continue Reading</a>
                                </div>
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
        </>
    )
}
export default Blog;