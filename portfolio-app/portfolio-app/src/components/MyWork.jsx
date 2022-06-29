import React from "react";
import works from "./myWorkList";
import gitPic from "../img/gitHub.svg";

export default function MyWork() {

  let card = document.querySelector('.project-card-container')

  function hover(e){

  // let offsetX = e.nativeEvent.offsetX - 137;
  // let offsetY = e.nativeEvent.offsetY - 244;
  card.style.transition =  `all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`
  card.style.transform = `perspective(1000px) scale3d(1.05, 1.05, 1.05)`

  // rotateX(${offsetY / 10}deg) rotateY(${offsetX / -10 }deg) 
  }
  function hoverOut(){
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  }


  const myWork = works.map((item) => {
    return (
      <div class="project-card"  >
        {item.prev.map((pic) => (
          <img
            src={pic}
            alt="store"
            style={{ width: "200px" }}
            className="img-thumbnail"
          />
        ))}

        <h3 class="h2-heading" id="header">
          {item.title}
        </h3>
        <div class="stacks">
          {item.skills.map((skill) => (
            <img src={skill} alt="" width="40px" />
          ))}
        </div>
        <p style={{ color: "gray", marginBottom: 0 }}>Key features</p>
        <ul>
          {item.features.map((ftr) => (
            <li>{ftr}</li>
          ))}
        </ul>
        <a href={item.link}>
          <img src={gitPic} alt="gitLink" width="50px" title="GitHub Link" />
        </a>
      </div>
    );
  });
  return (
    <div>
      <section id="section-3" class="my-work-section">
        <div class="div-cont">
          <h1>My Work</h1>
          <div className="project-card-container" onMouseMove={hover} onMouseOut={hoverOut}>
            {myWork}
            </div>
        </div>
      </section>
    </div>
  );
}
