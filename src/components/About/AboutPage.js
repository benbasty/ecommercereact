import React from 'react'
import imageAbout from '../../assets/img/about/a6.jpg'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <section id="aboutpage" className='section-p1'>
        <div className='imageAbout'>
            <img src={imageAbout} alt="aboutImg"/>
        </div>
        <div className='aboutDescription'>
            <h1>Welcome To DealBreaker</h1>
            <p>DealBreaker is a Professional ecommerce Platform.
            Here we will provide you only interesting content,
            which you will like very much. We're dedicated to
            providing you the best of ecommerce, with a focus
            on dependability and informational. We're working
            to turn our passion for ecommerce into a booming
            online website. We hope you enjoy our ecommerce
            as much as we enjoy offering them to you.
            Please make sure you check our blog posts
            on the website for all of you.
            Please give your support and love.</p>

            <p>Focusing on the very latest in affordable fashion styles,
            both attire and stunning accessories, we feature thousands
            of the newest product lines, providing maximum choice and
            convenience to our discerning clientele. From the very latest
            to the most daring, our team of expert menswear designers offer
            a range of styles ranging from casual to highly elegant.</p>

            <p>We offer the best in value for money fashion and quality
            service to our customers. We pride ourselves on being the
            ultimate source for the latest fashion trends. Focusing on
            value for money and quality clothes, we source our customers choice
            to purchase top fashion designers and product lines from some of the
            world's top designers, high end boutiques and luxury retailers.
            We strive to provide our customers with a value for their money
            with the best selection</p>
        </div>

    </section>
  )
}

export default AboutPage