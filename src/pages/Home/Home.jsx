import AboutMe from "../../components/sections/about/AboutMe.jsx";
import Contact from "../../components/sections/contact/Contact.jsx";
import Education from "../../components/sections/education/Education.jsx";
import HeroImage from "../../components/sections/hero-image/HeroImage.jsx";
import MyWork from "../../components/sections/my-work/MyWork.jsx";
import SkillIcons from "../../components/sections/skills-stack-slider/SkillIcons.jsx";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeSections}>
      <HeroImage />
      <SkillIcons />
      <MyWork />
      <Contact />
      <Education />
      <AboutMe />
    </div>
  );
}
