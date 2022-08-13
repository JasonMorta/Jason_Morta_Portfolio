import React from "react";
import { projectList } from "./myWorkList";
import gitPic from "../../../img/gitHub.svg";
import './myWorks.css'
export default function MyWork() {




  const myWork = projectList.map((item, index) => {
    return (
      <div className="project-card-container" key={index}>
      <div className="project-card" >
        {item.prev.map((pic, index) => (
          <div className="img-container">
          <img
          key={index}
            src={pic}
            alt="store"
            style={{ width: "200px" }}
            className="img-thumbnail"
          />
          </div>
        ))}

        <h3 className="h2-heading" id="header">
          {item.title}
        </h3>
        <div className="stacks">
          {item.skills.map((skill, index) => (
            <img src={skill} alt="" width="30px" key={index} />
          ))}
        </div>
        <p style={{ color: "gray", marginBottom: 0, marginLeft: 0 }}>Key features</p>
        <ul>
          {item.features.map((ftr, index) => (
            <li key={index}>{ftr}</li>
          ))}
        </ul>
       <div className="link-icons">
        {item.links.map((link, index)=>(
          <a href={link.link} target='_blank' rel="noreferrer" key={index}>
              <img className="img-links" src={link.icon} alt="logo" width="30px" title={link.title} />
          </a>
        ))}
          
       </div>
      </div>
      </div>
    );
  });

  
  return (
    <div>
      <section id="work" className="my-work-section">
        <div className="div-cont">
          <h1>My Work</h1>
            <div className="project-container">{myWork}</div>
        </div>
      </section>
    </div>
  );
}
