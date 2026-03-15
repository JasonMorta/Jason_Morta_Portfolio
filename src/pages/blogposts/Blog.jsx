import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../error/404.jsx";
import { AccentKicker, MetaPill, SectionTitle } from "../../styles/uiShells.js";
import styles from "./Blog.module.css";
import { fetchPortfolioBlogBySlug } from "../../services/portfolioBlogs.js";

function renderLegacySections(blog) {
  return (
    <div className={styles.bodyCopy}>
      {blog.sections?.map((section) => (
        <section key={section.title} className={styles.copySection}>
          <h3>{section.title}</h3>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets?.length > 0 && (
            <ul className={styles.copyList}>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

export default function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadBlog() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const entry = await fetchPortfolioBlogBySlug(slug);
        if (isMounted) {
          setBlog(entry);
        }
      } catch (error) {
        if (isMounted) {
          setErrorMessage(error?.message ?? "Unable to load the selected blog.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadBlog();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const orderedBlocks = useMemo(() => blog?.contentBlocks ?? [], [blog]);

  if (isLoading) {
    return <article className={styles.blogContainer}>Loading blog article...</article>;
  }

  if (errorMessage) {
    return <article className={styles.blogContainer}>{errorMessage}</article>;
  }

  if (!blog) {
    return <ErrorPage />;
  }

  return (
    <article className={styles.blogContainer}>
      <div className={styles.headerRow}>
        <div>
          <AccentKicker>Blog Post</AccentKicker>
          <SectionTitle>{blog.heading}</SectionTitle>
        </div>
        <MetaPill>{blog.created}</MetaPill>
      </div>
      <p className={styles.intro}>{blog.intro}</p>

      {orderedBlocks.length > 0 ? (
        <div className={styles.bodyCopy}>
          {orderedBlocks.map((block) => {
            if (block.type === 'sectionHeading') {
              return <h3 key={block.id ?? block.text}>{block.text}</h3>;
            }

            if (block.type === 'paragraph') {
              return <p key={block.id ?? block.text}>{block.text}</p>;
            }

            if (block.type === 'bullets') {
              return (
                <ul className={styles.copyList} key={block.id ?? block.items?.join('-')}>
                  {(block.items ?? []).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === 'image') {
              return (
                <figure className={styles.blogImageFigure} key={block.id ?? block.imageUrl}>
                  <img className={styles.blogImage} src={block.imageUrl} alt={block.imageAlt || blog.heading} />
                  {block.caption ? <figcaption className={styles.blogCaption}>{block.caption}</figcaption> : null}
                </figure>
              );
            }

            return null;
          })}
        </div>
      ) : (
        renderLegacySections(blog)
      )}
      <i>cr. {blog.created}</i>
    </article>
  );
}
