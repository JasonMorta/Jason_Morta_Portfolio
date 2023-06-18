import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { projectList } from "../../data/myWorkList";
import gitPic from "../../../img/gitHub.svg";
import "./myWorks.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { nanoid } from "nanoid";
import nextProject from "../../../img/projectRight.png";
import prevProject from "../../../img/projectLeft.png";
import { useState } from "react";
import Badge from "@mui/material/Badge";

//Material UI toolTip config
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
  let slide = 0;
  let container = document.querySelector(".project-container");
  const [skill, setSkill] = useState("");

  useEffect(() => {
    setSkill(document.getElementsByClassName("project-card"));
  }, []);

  //The div has a length/index of 9.

  function goRight() {
    console.log(skill.length);
    if (slide !== skill.length - 2) {
      slide += 1; //increment slide on each click by 1
    } else {
      slide = 0; //when equal to 5, make it 0, restarting the slide
    }

    //slide-scroll to the containers offsetLeft position using slide index value
    container.scrollTo(skill[slide].offsetLeft - 30, 0);
  }

  function goLeft() {
    if (slide !== 0) {
      slide -= 1;
    } else {
      slide += skill.length - 2;
    }
    container.scrollTo(skill[slide].offsetLeft - 30, 0);
  }

  const myWork = projectList.map((item, index) => {
    return (
      <div className="project-card-container" key={nanoid()}>
        <div className="project-card" key={nanoid()}>
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
            {item.skills.map(
              (
                skill,
                index //skill icons
              ) => (
                <BootstrapTooltip title={skill.name} key={nanoid()}>
                  <img src={skill.icon} alt="" width="30px" key={nanoid()} />
                </BootstrapTooltip>
              )
            )}
          </div>
          <p
            key={nanoid()}
            style={{ color: "gray", marginBottom: 0, marginLeft: 0 }}
          >
            Key features
          </p>
          <ul>
            {item.features.map((ftr, index) => (
              <li key={nanoid()}>{ftr}</li>
            ))}
          </ul>
          <div className="link-icons" style={{ margin: "auto" }} key={nanoid()}>
            {item.links.map((link, index) => (
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                key={nanoid()}
              >
                <BootstrapTooltip placement='top' title={link.title} key={nanoid()}>
                  {link.title === "Live demo" ? (
                    <Badge badgeContent={link.status === 'offline' ? 'Offline':'Live'} color="secondary">
                      <img
                        className="img-links"
                        src={link.icon}
                        alt="logo"
                        width="30px"
                      />
                    </Badge>
                  ) : (
                    <img
                      className="img-links"
                      src={link.icon}
                      alt="logo"
                      width="30px"
                    />
                  )}
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
          <div className="project-container">
            <img
              onClick={goLeft}
              className="left-arrow2"
              src={prevProject}
              alt="scroll button"
            />
            {myWork}
            <img
              onClick={goRight}
              className="right-arrow2"
              src={nextProject}
              alt="scroll button"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
