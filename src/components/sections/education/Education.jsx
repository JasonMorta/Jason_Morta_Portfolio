import React from 'react'
import skills from '../../data/SkillsObject'
import './style.css'
import scrollRight from '../../../img/right.png'
import scrollLeft from '../../../img/left.png'
import { useEffect } from 'react'





export default function Education() {

   let slide = 0
   let container = document.querySelector('.skill-stack');
   let each = document.getElementsByClassName('each');

   useEffect(() => {
     
   
   
   }, [])
   
   
   //The div has a length/index of 9.
  
   function goRight(){
      if(slide !== 9){
         slide += 1 //increment slide on each click by 1
        } else {
         slide = 0 //when equal to 9, make it 0, restarting the slide
        }
        
      //slide-scroll to the containers offsetLeft position using slide index value
      container.scrollTo(each[slide].offsetLeft-50, 0);
   }

   function goLeft(){
      if(slide !== 0){
         slide -= 1
        } else {
         slide += 9
        }
      container.scrollTo(each[slide].offsetLeft-50, 0);
   }


   const mySkills = skills.map((skill, index) => {
      return   <div className="skill-card each" id={skill.id}  key={index}>
                  <div className='image-container' >
                     <img width='40' src={skill.skill_img} alt="skill pic" />
                  </div>
                  <p key={index}>{skill.description}
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

   
         <div className="contentContainer skill-stack" id="stacks">
            <img onClick={goLeft} className='left-arrow' src={scrollLeft} alt='scroll button'/>
            {mySkills}
            <img onClick={goRight} className='right-arrow' src={scrollRight} alt='scroll button'/>
         </div>
     
   </div>
</section>
  )
}
