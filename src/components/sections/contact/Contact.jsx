import React from 'react'
import gitLogo from '../../../img/gitHub.svg'
import mapImg from '../../../img/map.png'
import './style.css'

export default function Contact() {
  return (
    <div>
      <section id="contact" className="contact-form">
         <div className="div-cont">
            <h1>GET IN TOUCH</h1>
            <div className="contact-map">
               <img src={mapImg} alt="location" className="my-location"/>
            </div>
            <p>I'm based in Cape Town, Sea Point, South Africa</p>
            <h4><a href="mailto:jasonmortadev@gmial.com">email me</a></h4>
            <a href="https://github.com/JasonMorta">
               <img src={gitLogo} alt="link_image"  width="50px" title="my github profile link"/>
            </a>
         </div>
      </section>
    </div>
  )
}
 