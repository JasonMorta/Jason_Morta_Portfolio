import styles from "./BackgroundSVG.module.css";

export default function BackgroundSVG() {
  return (
    <div className={styles.background}>
      <div className={styles.gradientBackgroundWrapper}>
        <div className={styles.gradientBackground}>
          <div className={`${styles.gradientBackgroundShape} ${styles.gradientBackgroundShape1}`} />
          <div className={`${styles.gradientBackgroundShape} ${styles.gradientBackgroundShape2}`} />
        </div>
        <div className={styles.gradientBackgroundNoise} />
      </div>
    </div>
  );
}
