import React from "react";
import hero_image from "../../../img/me-removebg-preview.png";
import Header from "../header/Header";
import "./heroImage.css";

export default function HeroImage() {

  // Prevent right click on image
  function noRightClick(event) {
    event.preventDefault();
  }

  // Tilt effect
  let tilt = 5; // amount of tilt: less is more

  // Rotate the card on mouse move
  function hover(e) {
    let card = document.querySelector(".intro-img");
    let offsetX = e.nativeEvent.offsetX - 125; //250 is half of the width of the image
    let offsetY = e.nativeEvent.offsetY - 125;

    // set the transition
    card.style.transition = `all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`;

    // apply the transform ti tilt the image
    // perspective is set on the parent container
    card.style.transform = `perspective(1000px) rotateX(${
      offsetY / tilt
    }deg) rotateY(${offsetX / -tilt}deg)  scale3d(1.05, 1.05, 1.05)`;
  }

  // Reset the transform on mouse leave
  function hoverOut() {
    let card = document.querySelector(".intro-img");
    card.style.transform = ` rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = `3s`;
  }

  return (
    <section id="main" className="intro-section">
      <Header />
      <div className="intro-img">
        <img
          src={hero_image}
          alt="Jason Morta"
          className="img-thumbnail p-pic"
          onPointerMove={hover}
          onPointerOut={hoverOut}
          onContextMenu={noRightClick}
        />
      </div>
    </section>
  );
}
