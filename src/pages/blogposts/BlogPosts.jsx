import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccentKicker, MetaPill, SectionTitle } from '../../styles/uiShells.js';
import styles from './BlogPosts.module.css';
import { fetchPortfolioBlogs } from '../../services/portfolioBlogs.js';
import NewBlogModal from './NewBlogModal.jsx';

export default function BlogPosts() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      setIsLoading(true);
      setErrorMessage('');

      try {
        const entries = await fetchPortfolioBlogs();
        if (isMounted) {
          setBlogs(entries);
        }
      } catch (error) {
        if (isMounted) {
          setErrorMessage(error?.message ?? 'Unable to load blogs from Firebase.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  function handleBlogCreated(createdBlog) {
    setBlogs((current) => [createdBlog, ...current].sort((first, second) => Number(second.id ?? 0) - Number(first.id ?? 0)));
  }

  return (
    <section className={styles.blogPostsContainer}>
      <div className={styles.pageHeaderRow}>
        <div className={styles.pageHeader}>
          <AccentKicker>Insights</AccentKicker>
          <SectionTitle>BLOGS</SectionTitle>
          <p className={styles.pageLead}>
            Articles are loaded from Firebase when this page renders, keeping the blog section dynamic without relying on hardcoded local content.
          </p>
        </div>
        <div className={styles.pageActions}>
          <NewBlogModal onCreated={handleBlogCreated} />
        </div>
      </div>

      {errorMessage && <p className={styles.statusError}>{errorMessage}</p>}

      {isLoading && <div className={styles.stateCard}>Loading portfolio blogs from Firebase...</div>}

      {!isLoading && !errorMessage && blogs.length === 0 && (
        <div className={styles.stateCard}>
          <p className={styles.stateTitle}>No blog documents were found in Firebase.</p>
          <p className={styles.stateText}>Add blog documents to Firestore and they will appear here automatically the next time this page loads.</p>
        </div>
      )}

      {!isLoading &&
        blogs.map((item, index) => (
          <article className={`${styles.divCont} ${styles.blog} ${styles.post} ${index % 2 === 0 ? styles.slideInLeft : styles.slideInRight}`} key={item.docId ?? item.slug}>
            <div className={styles.headContent}>
              <div>
                <h3>{item.heading}</h3>
                <p className={styles.previewText}>{item.intro}</p>
              </div>
              <MetaPill>{item.created}</MetaPill>
            </div>
            <div className={styles.desc}>
              <button type="button" className={styles.readMoreBtn} onClick={() => navigate(`/blogposts/${item.slug}`)}>
                Read more
              </button>
            </div>
          </article>
        ))}
    </section>
  );
}
