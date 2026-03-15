import { useRef } from "react";
import heroImage from "../../../img/me-removebg-preview.png";
import Header from "../header/Header.jsx";
import styles from "./HeroImage.module.css";

export default function HeroImage() {
  const cardRef = useRef(null);
  const tilt = 5;

  function noRightClick(event) {
    event.preventDefault();
  }

  function hover(event) {
    const card = cardRef.current;
    if (!card) {
      return;
    }

    const offsetX = event.nativeEvent.offsetX - 125;
    const offsetY = event.nativeEvent.offsetY - 125;

    card.style.transition = "all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    card.style.transform = `perspective(1000px) rotateX(${offsetY / tilt}deg) rotateY(${offsetX / -tilt}deg) scale3d(1.05, 1.05, 1.05)`;
  }

  function hoverOut() {
    const card = cardRef.current;
    if (!card) {
      return;
    }

    card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    card.style.transition = "3s";
  }

  return (
    <section id="main" className={styles.introSection}>
      <Header />
      <div className={styles.introImg} ref={cardRef}>
        <img
          src={heroImage}
          alt="Jason Morta"
          className={styles.pPic}
          onPointerMove={hover}
          onPointerOut={hoverOut}
          onContextMenu={noRightClick}
        />
      </div>
    </section>
  );
}
