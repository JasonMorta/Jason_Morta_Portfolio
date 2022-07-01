import React from "react";
import hero_image from "../img/me.jpg";
import "./heroImage.css";


export default function HeroImage(props) {

 

  //Profile image perspective
  function hover(e) {
    let card = document.querySelector(".intro-img");
    let offsetX = e.nativeEvent.offsetX - 151;
    let offsetY = e.nativeEvent.offsetY - 151;
    card.style.transition = `all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
    card.style.transform = `perspective(1000px) rotateX(${
      offsetY / 7
    }deg) rotateY(${offsetX / -7}deg)  scale3d(1.05, 1.05, 1.05)`;
  }
  function hoverOut() {
    let card = document.querySelector(".intro-img");
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = `1s`;
  }


  //update array if 1st letter is clicked
  function edit(e) {

   if (e.target.dataset.id === "1"){
      let newName = prompt("Change Name", props.name);
      if (newName != null) {
         props.name.splice(0, 100);
        let text = newName.split("");
        props.name.push(text);
        console.log(props.name);
      }
   }
      props.count()
  }

  //give each letter a number using set-attribute
  let num = 1;
  //map over each letter in array

  return (
    <section id="section-1" className="intro-section">
      <div className="intro-headings">
        <h1>
          {props.name.map((i, index) => (
            <span className="first-name" data-id={num++} onClick={edit} key={index}>
              {i}
            </span>
          ))}
          <br />
          <span className="last-name" >Morta</span>
        </h1>
        <h3>
          <span className="stack">Full Stack</span> Web-Developer
        </h3>
      </div>
      <div className="intro-img" onPointerMove={hover} onPointerOut={hoverOut}>
        <img src={hero_image} alt="myImage" className="img-thumbnail p-pic" />
      </div>
    </section>
  );
}
