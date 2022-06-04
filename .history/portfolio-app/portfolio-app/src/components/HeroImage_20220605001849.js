import React from 'react'

export default function HeroImage() {
  return (
   <section id="section-1" className="intro-section">
      <div className="intro-headings">
         <h1>
            <span className="first-name">Jason</span>
            <br/>
            <span className="last-name">Morta</span>
         </h1>
         <h3><span className="stack">Full Stack</span> Web-Developer</h3>
      </div>
      <div className="intro-img">
         <img src="./img/me.jpg" alt="myImage" className="img-thumbnail p-pic" />
      </div>
 </section>
  )
}
