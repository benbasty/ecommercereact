import React from 'react'
import ContactHeader from '../ContactHeader/ContactHeader'
import ContactSection from './ContactSection'
import NewsLetter from '../NewsLetter/NewsLetter'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <section id='contact' className='section-p1'>
        <ContactHeader/>
        <ContactSection/>
        <ContactForm />
        <NewsLetter />
    </section>
  )
}

export default Contact