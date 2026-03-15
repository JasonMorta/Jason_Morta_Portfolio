import PropTypes from "prop-types";
import styles from "./MyWork.module.css";

export default function MyWorkSkeleton({ width, height, sx, loading }) {
  const inlineStyle = {
    width,
    height,
    ...sx,
  };

  if (loading) {
    return <span className={styles.skeletonBlock} />;
  }

  return <span className={styles.skeletonBlock} style={inlineStyle} aria-hidden="true" />;
}

MyWorkSkeleton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object,
  loading: PropTypes.bool,
};
