/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'
import skills from '../../data/SkillsObject'
import './style.css'
import scrollRight from '../../../img/right.png'
import scrollLeft from '../../../img/left.png'
import { useEffect } from 'react'





export default function Education() {

   let slide = 0
   let container = document.querySelector('.skill-stack');
   const [skill, setSkill] = useState('') 

   useEffect(() => {
      setSkill(document.getElementsByClassName('each'))
   }, [])
   
   
   //The div has a length/index of 9.
   function goRight(){
      if(slide !== 9){
         slide += 1 //increment slide on each click by 1
        } else {
         slide = 0 //when equal to 9, make it 0, restarting the slide
        }

      //slide-scroll to the containers offsetLeft position using slide index value
      container.scrollTo(skill[slide].offsetLeft-55, 0);
   }

   function goLeft(){
      if(slide !== 0){
         slide -= 1
        } else {
         slide += 9
        }
      container.scrollTo(skill[slide].offsetLeft-55, 0);
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
         <p>After graduating from high school in 2009, I began my professional journey as a machine operator at QTec Moulding. When I ventured into web development in 2019, I initially took some online classes, although they didn't yield the desired outcomes I had anticipated. However, in April 2022, I made a significant leap by enrolling in and successfully completing the Full-Stack Web Developer course at <a href="https://www.hyperiondev.com/">HyperionDev</a>'s on-site boot camp.
         </p>
         <br/>
     <div className='edu-links'>
            {/* <a className='resume-link' 
               href="" 
               target="_blank" 
               rel="noreferrer">
               🔗My Resume(PDF)
            </a> */}
          
            <a className='resume-link' 
               href='https://www.hyperiondev.com/portfolio/44140/' 
               target="_blank" rel="noreferrer">
                 🔗My HyperionDev Portfolio
            </a>
            <a className='resume-link' 
               href='https://drive.google.com/file/d/1Vkmrp9vdxqDNuQT2Sj2GF98jpW8JJqfH/view?usp=sharing' 
               target="_blank" rel="noreferrer">
                 🔗Bootcamp Completion Certificate
            </a>
     </div>
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
