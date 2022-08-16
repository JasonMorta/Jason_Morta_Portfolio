import React from "react";
import { styled } from '@mui/material/styles';
import { projectList } from "./myWorkList";
import gitPic from "../../../img/gitHub.svg";
import './myWorks.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { nanoid } from 'nanoid'

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function MyWork() {




  const myWork = projectList.map((item, index) => {
    return (
      <div className="project-card-container" key={nanoid()}>
      <div className="project-card" key={nanoid()} >
        {item.prev.map((pic, index) => (
          <div className="img-container" key={nanoid()}>
          <img
          key={nanoid()}
            src={pic}
            alt="store"
            style={{ width: "200px" }}
            className="img-thumbnail"
          />
          </div>
        ))}

        <h3 className="h2-heading" id="header" key={nanoid()}>
          {item.title}
        </h3>
        <div className="stacks" key={nanoid()}>
          {item.skills.map((skill, index) => (//skill icons
          <BootstrapTooltip title={skill.name} key={nanoid()}>
            <img src={skill.icon} alt="" width="30px" key={nanoid()} />
            </BootstrapTooltip>
          ))}
        </div>
        <p key={nanoid()} style={{ color: "gray", marginBottom: 0, marginLeft: 0 }}>Key features</p>
        <ul>
          {item.features.map((ftr, index) => (
            <li key={nanoid()}>{ftr}</li>
          ))}
        </ul>
       <div className="link-icons" key={nanoid()}>
        {item.links.map((link, index)=>(
          <a href={link.link} target='_blank' rel="noreferrer" key={nanoid()}>
              <BootstrapTooltip title={link.title} key={nanoid()}>
              <img className="img-links" src={link.icon} alt="logo" width="30px" />
              </BootstrapTooltip>
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
