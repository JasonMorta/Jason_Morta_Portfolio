import React, { useState } from "react";
import skills from "../../data/SkillsObject";
import "./style.css";

export default function SkillIcons() {
  const mySkills = skills.map((skill, index) => {
    return (
      <div style={{
        left:`calc(80px * ${skills.length})`,
        animationDelay: `calc(35s/${skills.length}*(${skills.length} - (${index})) * -1`
      }} className={`skill-card card${index}`} id={skill.id} key={index}>
        <img width="50" src={skill.skill_img} alt="skill pic" />
        <p key={index}>{skill.title}</p>
      </div>
    );
  });

  return (
    <div id="section-2" className="div-cont">
      <h1>My Stack</h1>
      <p>
      While my primary skill lies in MERN, I also have extensive experience working with both older and newer technologies.
      </p>
      <div className="contentContainer skill-stack">
        {mySkills}
        
        </div>
    </div>
  );
}
