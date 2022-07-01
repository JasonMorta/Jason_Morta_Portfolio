import React from "react";
import works from "./myWorkList";
import gitPic from "../img/gitHub.svg";
import './myWorks.css'
export default function MyWork() {




  const myWork = works.map((item, index) => {
    return (
      <div className="project-card-container" key={index}>
      <div className="project-card" >
        {item.prev.map((pic, index) => (
          <img
          key={index}
            src={pic}
            alt="store"
            style={{ width: "200px" }}
            className="img-thumbnail"
          />
        ))}

        <h3 className="h2-heading" id="header">
          {item.title}
        </h3>
        <div className="stacks">
          {item.skills.map((skill, index) => (
            <img src={skill} alt="" width="40px" key={index} />
          ))}
        </div>
        <p style={{ color: "gray", marginBottom: 0 }}>Key features</p>
        <ul>
          {item.features.map((ftr, index) => (
            <li key={index}>{ftr}</li>
          ))}
        </ul>
        <a href={item.link}>
          <img src={gitPic} alt="gitLink" width="50px" title="GitHub Link" />
        </a>
      </div>
      </div>
    );
  });

  
  return (
    <div>
      <section id="section-3" className="my-work-section">
        <div className="div-cont">
          <h1>My Work</h1>
         
            {myWork}
        
        </div>
      </section>
    </div>
  );
}
