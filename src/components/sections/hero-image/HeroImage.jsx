import React from "react";
import hero_image from "../../../img/me.jpg";
import Header from "../header/Header";
import "./heroImage.css";


export default function HeroImage() {

 

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



  return (
    <section id="main" className="intro-section">
      <Header />
      <div className="intro-img" onPointerMove={hover} onPointerOut={hoverOut}>
        <img src={hero_image} alt="myImage" className="img-thumbnail p-pic" />
      </div>
    </section>
  );
}
