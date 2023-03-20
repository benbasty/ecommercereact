import React from 'react'
import './ContactSection.css'
import {MdLocationOn} from 'react-icons/md';
import {BsEnvelope, BsTelephone} from 'react-icons/bs';
// import {IoCallOutline} from '@react-icons/all-files/io/IoCallOutline';
import {BiInfoCircle} from 'react-icons/bi';

const ContactSection = () => {
  return (
    <section id='contactsection'>
        <div className='contactDesc'>
            <h6>Get in touch</h6>
            <h1>Visit one of our agency locations or contact us today</h1>
            <h4>Head Office</h4>
            <div className='detailsContact'>
                <span><MdLocationOn/></span>
                <p>56 Glassford Glasglow GI IUL New York</p>
            </div>
            <div className='detailsContact'>
                <span><BsEnvelope/></span>
                <p>contact@example.com</p>
            </div>
            <div className='detailsContact'>
                <span><BsTelephone/></span>
                <p>00-(00)-1234567890</p>
            </div>
            <div className='detailsContact'>
                <span><BiInfoCircle/></span>
                <p>Monday to Saturday: 9.00am to 16.00pm</p>
            </div>
        </div>
        <div className='MapContact'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625693755!2d2.2922926155268812!3d48.858370079287546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2stw!4v1679324797439!5m2!1sen!2stw" title='google map' width="700" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </section>
  )
}

export default ContactSection