import React, { useState } from "react";
import skills from "../../data/SkillsObject";
import "./style.css";

export default function SkillIcons() {
  const mySkills = skills.map((skill, index) => {
    return (
      <div style={{
        left:`calc(80px * ${skills.length})`,
        animationDelay: `calc(30s/${skills.length}*(${skills.length} - (${index})) * -1`
      }} className={`skill-card card${index}`} id={skill.id} key={index}>
        <img width="50" src={skill.skill_img} alt="skill pic" />
        <p key={index}>{skill.title}</p>
      </div>
    );
  });

  return (
    <div id="section-2" className="div-cont">
      <h1>My Stack</h1>
      <div className="contentContainer skill-stack">{mySkills}</div>
    </div>
  );
}
