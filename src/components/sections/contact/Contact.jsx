import { useLocation } from "react-router-dom";
import { ActionChip, AccentKicker, GlassPanel, MetaPill, PanelHeader, SectionTitle } from "../../../styles/uiShells.js";
import gitLogo from "../../../img/gitHub.svg";
import mapImg from "../../../img/map.png";
import styles from "./Contact.module.css";

export default function Contact() {
  const location = useLocation();

  return (
    <section id="contact" className={styles.contactForm}>
      <GlassPanel as="div" className={styles.divCont}>
        <PanelHeader>
          <div className={styles.headingBlock}>
            <AccentKicker>Contact</AccentKicker>
            <SectionTitle>Get In Touch</SectionTitle>
          </div>
          <MetaPill>Available for freelance work and collaborative projects</MetaPill>
        </PanelHeader>

        <div className={styles.contactGrid}>
          <div className={styles.infoCard}>
            <h3>Location</h3>
            <p>
              I&apos;m based in Sea Point, Cape Town, South Africa, and I&apos;m open to discussing remote opportunities,
              freelance engagements, and collaborative product work.
            </p>
            <ActionChip href="mailto:jasonmortadev@gmail.com" target="_blank" rel="noreferrer">
              Email Me
            </ActionChip>
            <span className={styles.emailText}>jasonmortadev@gmail.com</span>
          </div>

          <div className={styles.contactMap}>
            <img src={mapImg} alt="Cape Town location" className={styles.myLocation} />
          </div>
        </div>

        <a href="https://github.com/JasonMorta" target="_blank" rel="noreferrer" className={styles.githubLink}>
          <img src={gitLogo} alt="GitHub profile" width="50" title="GitHub profile" />
          <span>View GitHub Profile</span>
        </a>
      </GlassPanel>

      {location.pathname === "/contact" && (
        <section className={styles.formEmbedWrap}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdmZbwxAPdHjtiYm86enNefolniyr8IOqgiCFroPierbY2PTA/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact form"
          >
            Loading…
          </iframe>
        </section>
      )}
    </section>
  );
}
