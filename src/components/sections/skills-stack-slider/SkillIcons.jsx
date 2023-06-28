import React, { useState } from 'react'
import skills from '../../data/SkillsObject'
import './style.css'
import scrollRight from '../../../img/right.png'
import scrollLeft from '../../../img/left.png'
import { useEffect } from 'react'


export default function SkillIcons() {






  const mySkills = skills.map((skill, index) => {
    return (
      <div className="skill-card each" id={skill.id} key={index}>
        <img width="50" src={skill.skill_img} alt="skill pic" />
        <p key={index}>{skill.title}</p>
      </div>
    );
  });

  return (
    <div id="section-2" className="div-cont">
      <h3>Skill Stack</h3>
      <div className="contentContainer skill-stack" id="stacks">
   
        {mySkills}

      </div>
    </div>
  );
}
