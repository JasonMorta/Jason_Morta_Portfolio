import React from 'react'
import skills from '../../data/SkillsObject'
import './style.css'
import scrollRight from '../../../img/right.png'
import scrollLeft from '../../../img/left.png'





export default function Education() {



   const mySkills = skills.map((skill, index) => {
      return   <div className="skill-card" id={skill.id}  key={index}>
                  <div className='image-container'>
                     <img width='40' src={skill.skill_img} alt="skill pic"/>
                  </div>
                  <p>{skill.description}
                  </p>
               </div>
   })


  return (
   <section id="section-2" className="about-section">
   <div className="div-cont">
      <header>
         <em style={{color: 'gray'}}>Education</em>
         <p>In 2009 I finished high school and started working as a machine operator at QTec Moulding. I took a few online classes when I started(2019) my web dev career, but didn't get as much out of it as I have hoped for. I'm now(April 2022) enrolled at <a href="https://www.hyperiondev.com/">Hyperion Dev's</a> on-site boot camp.
         </p>
         <a className='resume-link' href="https://drive.google.com/file/d/1Ht3eDu1piX8iMPWNUk8xUUHvC1f-pNn7/view?usp=sharing" target="_blank" rel="noreferrer">🔗PDF Resume</a>
      </header>

      <h3>Skill Stack</h3>

      <div className="contentContainer" id="stacks">
         <img className='left-arrow' src={scrollLeft} alt='scroll button'/>
         {mySkills}
         <img className='right-arrow' src={scrollRight} alt='scroll button'/>
      </div>
   </div>
</section>
  )
}
