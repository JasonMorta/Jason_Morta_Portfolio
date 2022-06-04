import React from 'react'
import skills from './SkillsObject'

export default function Education() {
  return (
   <section id="section-2" class="about-section">
   <div class="div-cont">
      <header>
         <em style={{color: 'gray'}}>Education</em>
         <p>In 2009 I finished high school and started working as a machine operator at QTec Moulding. I took a few online classes when I started(2019) my web dev career, but didn't get as much out of it as I have hoped for. I'm now(April 2022) enrolled at <a href="https://www.hyperiondev.com/">Hyperion Dev's</a> on-site boot camp.
         </p>
      </header>

      <h3>Skill Stack</h3>

      <div class="contentContainer" id="stacks">
         <div class="skill-card">
            <img src="./img/html5.svg" alt="html5img">
            <p><em>HTML5</em>: Everyday I'm learning more and better ways to use HTML elements. Writing much cleaner
               and reusable code.
            </p>
         </div>
         <div class="skill-card">
            <img src="./img/CSS.svg" alt="html5img" width="150">
            <p><em>CSS3</em>: I use CSS in every project, even the small ones. I'm familiar with Flex Box, Grid and
               also make use of Bootstrap when needed.
            </p>
         </div>
         <div class="skill-card">
            <img src="./img/JS.svg" alt="html5img">
            <p><em>Javascript</em>: I regularly use JS to add extra functionality to my projects, using some of the latest ES-version syntax like for of, forEach, arrow functions, ternary operator, template literals, and more.
            </p>
         </div>
         <div class="skill-card">
            <img src="./img/jquery-official.svg" alt="html5img" style="padding:37px 0px;">
            <p><em>JQUERY:</em> This library makes adding animation with JS much easier and faster. Because of its support on all modern browsers I tend to use jQuery more often.</p>
         </div>
         <div class="skill-card">
            <img src="./img/boots.svg" alt="html5img">
            <p><em>BOOTSTRAP</em>: To quickly create responsive tables, images, or forms, I turn to bootstrap but add my own styling to give my code a personal touch.</p>
         </div>

      </div>
   </div>
</section>
  )
}
