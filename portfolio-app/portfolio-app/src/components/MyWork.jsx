import React from "react";
import works from "./myWorkList";


export default function MyWork() {
  const myWork = works.map(item => {
    return (
      <div class="project-card">
      {item.prev.map(pic => pic {
        return (
         <img
          src={pic}
          alt="store"
          style={{width: "200px"}}
          className="img-thumbnail"
        />
        )
      })
   }
        
        <h5 class="h2-heading" id="header">
          {item.title}
        </h5>
        <div class="stacks">
          <img src="./img/JS.svg" alt="" width="40px" />
          <img src="./img/jquery-official.svg" alt="" width="40px" />
          <img src="./img/boots.svg" alt="" width="40px" />
        </div>
        <p style={{ color: "gray", marginBottom: 0 }}>Key features</p>
        <ul>
          <li>cart system</li>
          <li>VAT calculation</li>
          <li>shipping methods</li>
          <li>save cart to localStorage</li>
        </ul>
        <a href="https://github.com/JasonMorta/Level-1-Capstone-Project-My-online-store.git">
          <img
            src="./img/gitHub.svg"
            alt="gitLink"
            width="50px"
            title="GitHub Link"
          />
        </a>
      </div>
    );
  });
  return (
    <div>
      <section id="section-3" class="my-work-section">
        <div class="div-cont">
          <h1>My Work</h1>
        </div>
      </section>
    </div>
  );
}
