import { useEffect, useMemo, useState } from 'react';
import styles from './SkillIcons.module.css';
import { fetchPortfolioSkills } from '../../../services/portfolioSkills.js';

export default function SkillIcons() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadSkills() {
      try {
        const firebaseSkills = await fetchPortfolioSkills();
        if (!isMounted) {
          return;
        }

        setSkills(firebaseSkills);
        setErrorMessage('');
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setErrorMessage(error instanceof Error ? error.message : 'Failed to load skills from Firebase.');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadSkills();
    return () => {
      isMounted = false;
    };
  }, []);

  const mySkills = useMemo(
    () =>
      skills.map((skill, index) => (
        <div
          style={{
            left: `calc(80px * ${skills.length})`,
            animationDelay: `calc(35s/${skills.length}*(${skills.length} - (${index})) * -1)`,
          }}
          className={styles.skillCard}
          id={skill.id}
          key={skill.docId ?? skill.id}
        >
          <img width="50" src={skill.skill_img} alt={skill.title} />
          {/* <p>{skill.title}</p> */}
        </div>
      )),
    [skills],
  );

  return (
    <section id="skills" className={styles.divCont}>
      <div className={styles.headerRow}>
        <div>
          <h1>My Stack</h1>
          <p>
            My core experience is centred on the MERN stack, while my day-to-day work also draws on a wider range of modern
            frameworks, tools, and supporting technologies.
          </p>
        </div>
      </div>

      {errorMessage ? (
        <div className={`${styles.statusBanner} ${styles.error ?? ''}`} role="status">
          {errorMessage}
        </div>
      ) : null}

      {isLoading ? (
        <div className={styles.emptyState}>Loading Firebase skills...</div>
      ) : skills.length > 0 ? (
        <div className={`${styles.contentContainer} ${styles.skillStack}`}>{mySkills}</div>
      ) : (
        <div className={styles.emptyState}>No skills are available from Firebase yet.</div>
      )}
    </section>
  );
}
