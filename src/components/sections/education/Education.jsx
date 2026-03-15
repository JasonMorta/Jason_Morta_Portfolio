import { ActionChip, AccentKicker, GlassPanel, MetaPill, PanelHeader, SectionTitle } from "../../../styles/uiShells.js";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <GlassPanel as="div" className={styles.divCont}>
        <PanelHeader>
          <div className={styles.headingBlock}>
            <AccentKicker>Education</AccentKicker>
            <SectionTitle>Developer Education</SectionTitle>
          </div>
          <MetaPill>Bootcamp trained • Self-directed growth</MetaPill>
        </PanelHeader>

        <div className={styles.contentCard}>
          <p>
            My path into web development began in 2019 through online learning, where I built an early foundation in the craft.
            In April 2022, I took that commitment further by enrolling in and completing the Full-Stack Web Developer programme at{" "}
            <a href="https://www.hyperiondev.com/">HyperionDev</a>
            &apos;s on-site bootcamp. Since then, I&apos;ve continued sharpening my skills through consistent hands-on building,
            problem solving, and real project work.
          </p>
        </div>

        <div className={styles.eduLinks}>
          <ActionChip className={styles.resumeLink} href="https://www.hyperiondev.com/portfolio/44140/" target="_blank" rel="noreferrer">
            🔗 My HyperionDev Portfolio
          </ActionChip>
          <ActionChip className={styles.resumeLink} href="https://drive.google.com/file/d/1Vkmrp9vdxqDNuQT2Sj2GF98jpW8JJqfH/view?usp=sharing" target="_blank" rel="noreferrer">
            🔗 Bootcamp Completion Certificate
          </ActionChip>
        </div>
      </GlassPanel>
    </section>
  );
}
