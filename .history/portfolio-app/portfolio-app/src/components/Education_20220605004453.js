import React from 'react'
import skills from './SkillsObject'

export default function Education() {



   const mySkills = skills.map(skill => {
      return   <div class="skill-card">
                  <img src={skill.skill_img} alt="skill pic"/>
                  <p>{skill.description}
                  </p>
               </div>
   })


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
         {mySkills}
      </div>
   </div>
</section>
  )
}
