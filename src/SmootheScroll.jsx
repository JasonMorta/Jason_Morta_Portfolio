import { useEffect, useRef } from "react";
import styles from "./styles/SmoothScroll.module.css";

export default function SmoothScroll({ children }) {
  const viewportRef = useRef(null);
  const frameRef = useRef(0);
  const currentY = useRef(0);
  const targetY = useRef(0);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return undefined;
    }

    const syncHeight = () => {
      document.body.style.height = `${viewport.scrollHeight}px`;
    };

    const animate = () => {
      targetY.current = window.scrollY || window.pageYOffset || 0;
      currentY.current += (targetY.current - currentY.current) * 0.12;

      if (Math.abs(targetY.current - currentY.current) < 0.1) {
        currentY.current = targetY.current;
      }

      viewport.style.transform = `translate3d(0, ${-currentY.current}px, 0)`;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    syncHeight();
    animate();

    resizeObserverRef.current = new ResizeObserver(syncHeight);
    resizeObserverRef.current.observe(viewport);

    window.addEventListener("resize", syncHeight);
    window.addEventListener("load", syncHeight);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", syncHeight);
      window.removeEventListener("load", syncHeight);
      resizeObserverRef.current?.disconnect();
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div className={styles.viewport} ref={viewportRef}>
      {children}
    </div>
  );
}
