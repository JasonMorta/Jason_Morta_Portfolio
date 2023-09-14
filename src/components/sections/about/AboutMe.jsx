import { func } from 'prop-types';
import React, { useState } from 'react'
import './about.css'

export default function AboutMe() {

   //control height of about section
   const [height, setHeight] = useState('220px');
   // control read more text
   const [reamMore, setReadMore] = useState('Read More');

   //set height of about section and change read more text.
   function setAboutHeight() {

      if(height < '250px') {
         setHeight('470px');
         setReadMore('Read Less');
      } else {
         setHeight('220px');
         setReadMore('Read More');
      }
   }

  return (
   <section id="about" className="about-section">
      <div className="div-cont" style={{height: `${height}`}} >
         <header>
            <h1>ABOUT ME</h1>
            <p>
               <i style={{color: 'gray'}}>To advance effectively, it is crucial to have a solid grasp of the fundamentals.</i>
            </p>
            <br/>
            <p>Greetings from Cape Town! I'm Jason Morta, a passionate full-stack web developer with a flair for crafting digital wonders. My journey into the world of web development took off in 2019, and I've been hooked ever since.
            </p>
            <br />
            <p>
               <b>My love affair with web development</b> ignited when I created my very first website from scratch. Witnessing my ideas transform into digital realities was nothing short of magical. Since then, I've been on an exhilarating quest to bring creativity to life through code.

            </p>
            <br />
            <p>
               What truly <b>sets me apart</b> is my unwavering commitment to creating exceptional digital experiences. I believe in the power of clean code, responsive design, and relentless learning. I strive to stay at the forefront of technology, ensuring that I provide innovative solutions that stand out in the digital world.
            </p>
           
         
            <i onClick={()=> setAboutHeight()} className='about-section-readMore'>{reamMore}</i>
         </header>
      
      </div>
   </section>
  )
}
 