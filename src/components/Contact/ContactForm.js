import './ContactForm.css';
import img1 from '../../assets/img/people/1.png'
import img2 from '../../assets/img/people/2.png'
import img3 from '../../assets/img/people/3.png'

import React from 'react'

const ContactForm = () => {
  return (
    <section id='form-details'>
        <form>
            <h6>LEAVE A MESSAGE</h6>
            <h1>We love to hear from you</h1>
            <input type='text' placeholder='Your name'/>
            <input type='email' placeholder='Email'/>
            <input type='text' placeholder='Subject'/>
            <textarea name='' id='' cols='30' rows='10' placeholder=''></textarea>
            <button>Submit</button>
        </form>
        <div className='people'>
            <div>
                <img src={img1} alt="peopleimg"/>
                <p><span>John Casablanca</span> Senior Web Designer <br/>Phone: +00 123 3567 890 <br/> Email: contact@example.com</p>
            </div>
            <div>
                <img src={img2} alt="peopleimg"/>
                <p><span>Spencer Sinatra</span> General Manager <br/>Phone: +00 123 3567 890 <br/> Email: contact@example.com</p>
            </div>
            <div>
                <img src={img3} alt="peopleimg"/>
                <p><span>Kala Bela</span> Head Marketing <br/>Phone: +00 123 3567 890 <br/> Email: contact@example.com</p>
            </div>
        </div>
    </section>
  )
}

export default ContactForm