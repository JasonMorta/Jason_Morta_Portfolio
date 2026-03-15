import { useEffect, useMemo, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { AccentKicker, MetaPill, SectionTitle } from '../../../styles/uiShells.js';
import nextProject from '../../../img/projectRight.png';
import prevProject from '../../../img/projectLeft.png';
import gitIcon from '../../../img/gitHub.svg';
import herokuIcon from '../../../img/heroku.png';
import renderIcon from '../../../img/render.png';
import netlifyIcon from '../../../img/netlify.png';
import reactIcon from '../../../img/react.png';
import styles from './MyWork.module.css';
import MyWorkSkeleton from './MyWorkSkeleton.jsx';
import NewWorkModal from './NewWorkModal.jsx';
import { fetchPortfolioProjects } from '../../../services/portfolioProjects.js';
import { fetchPortfolioSkills } from '../../../services/portfolioSkills.js';

function TooltipIcon({ title, children }) {
  return (
    <span className={styles.tooltipWrapper} title={title} aria-label={title}>
      {children}
    </span>
  );
}

const linkIconMap = {
  repo: gitIcon,
  demo: netlifyIcon,
  render: renderIcon,
  heroku: herokuIcon,
};

function resolveLinkIcon(link) {
  const iconKey = link.iconType ?? link.type;

  if (iconKey === 'repo') {
    return gitIcon;
  }

  if (iconKey === 'render' || /render/i.test(link.link ?? '')) {
    return renderIcon;
  }

  if (iconKey === 'heroku' || /heroku/i.test(link.link ?? '')) {
    return herokuIcon;
  }

  return linkIconMap[iconKey] ?? netlifyIcon;
}

export default function MyWork() {
  const containerRef = useRef(null);
  const slideRef = useRef(0);
  const [projectsList, setProjectsList] = useState([]);
  const [skillsCatalog, setSkillsCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      setIsLoading(true);
      setErrorMessage('');

      try {
        const [entries, skills] = await Promise.all([fetchPortfolioProjects(), fetchPortfolioSkills()]);
        if (isMounted) {
          setProjectsList(entries);
          setSkillsCatalog(skills);
        }
      } catch (error) {
        if (isMounted) {
          setErrorMessage(error?.message ?? 'Unable to load portfolio projects from Firebase.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const skillIconMap = useMemo(
    () =>
      Object.fromEntries(
        skillsCatalog
          .filter((item) => item.title && item.skill_img)
          .map((item) => [item.title, item.skill_img]),
      ),
    [skillsCatalog],
  );

  function handleProjectSaved(savedProject, mode) {
    setProjectsList((current) => {
      if (mode === 'add') {
        return [...current, savedProject].sort((first, second) => Number(first.order ?? first.id ?? 0) - Number(second.order ?? second.id ?? 0));
      }

      return current
        .map((item) => (item.docId === savedProject.docId ? savedProject : item))
        .sort((first, second) => Number(first.order ?? first.id ?? 0) - Number(second.order ?? second.id ?? 0));
    });

    setStatusMessage(mode === 'add' ? 'Project added to Firebase successfully.' : 'Project updated in Firebase successfully.');
  }

  function handleProjectDeleted(deletedDocId) {
    setProjectsList((current) => current.filter((item) => item.docId !== deletedDocId));
    setStatusMessage('Project removed from Firebase successfully.');
  }

  const projects = useMemo(
    () =>
      projectsList.map((item, index) => {
        return (
          <div className={styles.projectCardContainer} key={item.docId ?? item.slug ?? index}>
            <article className={styles.projectCard}>
              <NewWorkModal mode="edit" project={item} skillOptions={skillsCatalog} onSaved={handleProjectSaved} onDeleted={handleProjectDeleted} />

              {(item.previewImages?.length ? item.previewImages : ['']).map((pic, imageIndex) => (
                <div className={styles.imgContainer} key={`${item.title}-${imageIndex}`}>
                  {pic ? <img src={pic} alt={item.title} className={styles.imgThumbnail} /> : <MyWorkSkeleton width="100%" height={200} />}
                </div>
              ))}

              <div className={styles.cardBottom}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.h2Heading}>{item.title || <MyWorkSkeleton width="100%" height={20} />}</h3>
                  <MetaPill>{item.skills?.length ?? 0} Tech{(item.skills?.length ?? 0) === 1 ? '' : 's'}</MetaPill>
                </div>

                {item.skills?.length ? (
                  <div className={styles.stacks}>
                    {item.skills.map((skill, skillIndex) => (
                      <TooltipIcon title={skill} key={`${skill}-${skillIndex}`}>
                        <span className={styles.skillChip}>
                          <img src={skillIconMap[skill] ?? reactIcon} alt={skill} width="24" />
                          {/* <span>{skill}</span> */}
                        </span>
                      </TooltipIcon>
                    ))}
                  </div>
                ) : (
                  <MyWorkSkeleton width={50} height={34} />
                )}

                <p className={styles.featureLabel}>Key features</p>
                <div className={styles.keyFeatureContainer}>
                  <ul className={styles.keyFeatures}>
                    {item.features?.length ? item.features.map((feature, featureIndex) => <li key={`${feature}-${featureIndex}`}>{feature}</li>) : <li>No feature summary has been added yet.</li>}
                  </ul>
                </div>
              </div>

              <div className={styles.linkIcons} key={nanoid()}>
                {(item.links ?? []).map((link, linkIndex) => (
                  <div key={`${link.title}-${linkIndex}`}>
                    {link.link?.length ? (
                      <a href={link.link} target="_blank" rel="noreferrer">
                        <TooltipIcon title={link.title}>
                          <span className={styles.linkIconShell}>
                            {link.title === 'Live demo' && <span className={styles.liveBadge}>{link.status === 'offline' || link.status === '!offline' ? 'Offline' : 'Live'}</span>}
                            <img className={styles.imgLinks} src={resolveLinkIcon(link)} alt={link.title} width="30" />
                          </span>
                        </TooltipIcon>
                      </a>
                    ) : (
                      <MyWorkSkeleton width={30} height={30} />
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>
        );
      }),
    [projectsList, skillsCatalog, skillIconMap],
  );

  const scrollToProject = (direction) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const cards = container.querySelectorAll(`.${styles.projectCard}`);
    if (!cards.length) {
      return;
    }

    const maxIndex = Math.max(cards.length - 2, 0);

    if (direction === 'right') {
      slideRef.current = slideRef.current !== maxIndex ? slideRef.current + 1 : 0;
    } else {
      slideRef.current = slideRef.current !== 0 ? slideRef.current - 1 : maxIndex;
    }

    const nextCard = cards[slideRef.current];
    container.scrollTo({ left: nextCard.offsetLeft - 30, behavior: 'smooth' });
  };

  return (
    <section id="work" className={styles.myWorkSection}>
      <div className={styles.divCont}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerText}>
            <AccentKicker>Selected Projects</AccentKicker>
            <SectionTitle>My Work</SectionTitle>
            <p className={styles.sectionIntro}>
              Portfolio projects are loaded from Firebase when this section renders, while logged-in admin controls can now add, edit, and delete the project records directly from the workspace.
            </p>
          </div>
          <div className={styles.sectionActions}>
            <NewWorkModal mode="add" skillOptions={skillsCatalog} onSaved={handleProjectSaved} />
          </div>
        </div>

        {statusMessage ? <p className={styles.statusInfo}>{statusMessage}</p> : null}
        {errorMessage ? <p className={styles.statusError}>{errorMessage}</p> : null}

        {isLoading ? <div className={styles.stateCard}>Loading portfolio projects from Firebase...</div> : null}

        {!isLoading && !errorMessage && projectsList.length === 0 ? (
          <div className={styles.stateCard}>
            <p className={styles.stateTitle}>No Firebase portfolio projects were found.</p>
            <p className={styles.stateText}>
              The My Work section now reads only from Firebase. Logged-in controls can create the first project directly inside the workspace.
            </p>
          </div>
        ) : null}

        {!isLoading && projectsList.length > 0 ? (
          <>
          <div className={styles.arrowContainer}>
              <img onClick={() => scrollToProject('left')} className={styles.leftArrow2} src={prevProject} alt="Previous project" width="30" />
                <img onClick={() => scrollToProject('right')} className={styles.rightArrow2} src={nextProject} alt="Next project" width="30" />
          </div>
            <div className={styles.projectContainer} ref={containerRef}>
              {projects}
            </div>
          
          </>
        ) : null}
      </div>
    </section>
  );
}
