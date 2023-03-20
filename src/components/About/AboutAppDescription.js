import React from 'react'
import './AboutAppDescription.css'
import videoapp from '../../assets/img/about/1.mp4'

const AboutAppDescription = () => {
  return (
    <section id='aboutApp' className='section-p1'>
        <h1>Download our <a href='#downloadApp'>App</a></h1>
        <div className='video'>
            <video src={videoapp} autoplay muted loop></video>
        </div>
    </section>
  )
}

export default AboutAppDescription