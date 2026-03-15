import { useState } from "react";
import { AccentKicker, GlassPanel, MetaPill, PanelHeader, SectionTitle } from "../../../styles/uiShells.js";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className={styles.aboutSection}>
      <GlassPanel as="div" className={`${styles.divCont} ${expanded ? styles.expanded : ""}`}>
        <PanelHeader>
          <div className={styles.headingBlock}>
            <AccentKicker>About</AccentKicker>
            <SectionTitle>About Me</SectionTitle>
          </div>
          <MetaPill>Cape Town • Full-stack Web Developer</MetaPill>
        </PanelHeader>

        <div className={styles.contentWrap}>
          <p className={styles.lead}>
            Strong digital products start with solid fundamentals, thoughtful execution, and a genuine focus on user experience.
          </p>

          <p>
            I&apos;m Jason Morta, a full-stack web developer based in Cape Town with a strong interest in building polished,
            practical, and engaging web experiences. My journey into development started in 2019, and it quickly became a
            field I wanted to pursue seriously.
          </p>

          <p>
            That interest grew into a long-term commitment when I built my first website from scratch and saw how design,
            logic, and interactivity could come together to create something meaningful. Since then, I&apos;ve continued refining
            my skills by building projects that balance technical quality with a clean, user-focused presentation.
          </p>

          <p>
            I value clear structure, maintainable code, responsive design, and continuous improvement. Whether I&apos;m developing
            a portfolio project or contributing to a broader product idea, I aim to create work that feels deliberate,
            reliable, and professional from both a technical and visual perspective.
          </p>
        </div>

        <div className={styles.footerFade} aria-hidden="true" />
        <button type="button" onClick={() => setExpanded((value) => !value)} className={styles.readMore}>
          {expanded ? "Read Less" : "Read More"}
        </button>
      </GlassPanel>
    </section>
  );
}
