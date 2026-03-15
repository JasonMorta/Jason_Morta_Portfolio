import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.error}>
      <h2>The page you are looking for does not exist.</h2>
      <h2>Please return to the main page...</h2>
    </div>
  );
}
