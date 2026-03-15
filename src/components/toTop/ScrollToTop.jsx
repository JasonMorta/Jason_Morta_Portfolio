import { useNavigate } from "react-router-dom";
import top from "../../img/top.png";
import backBtn from "../../img/back.png";
import styles from "./ScrollToTop.module.css";

function TooltipIcon({ title, children }) {
  return (
    <span className={styles.tooltipWrapper} title={title} aria-label={title}>
      {children}
    </span>
  );
}

export default function ScrollToTop() {
  const navigate = useNavigate();

  return (
    <div className={styles.toTop}>
      <TooltipIcon title="BACK">
        <img onClick={() => navigate(-1)} src={backBtn} alt="Go back" />
      </TooltipIcon>

      <TooltipIcon title="TOP">
        <img onClick={() => window.scrollTo(0, 0)} src={top} alt="Scroll to top" />
      </TooltipIcon>
    </div>
  );
}
