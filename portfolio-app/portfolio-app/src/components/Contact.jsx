import React from 'react'
import gitLogo from '../img/gitHub.svg'
import mapImg from '../img/map.png'


export default function Contact() {
  return (
    <div>
      <section id="section-4" className="contact-form">
         <div className="div-cont">
            <h1>GET IN TOUCH</h1>
            <div className="contact-map">
               <img src={mapImg} alt="location" className="my-location"/>
            </div>
            <p>I'm based in Cape Town, Sea Point, South Africa</p>
            <h4>Email: jasonmorta@gmail.com</h4>
            <a href="https://github.com/JasonMorta">
               <img src={gitLogo} alt="link_image"  width="50px" title="my github profile link"/>
            </a>
         </div>
      </section>
    </div>
  )
}
 