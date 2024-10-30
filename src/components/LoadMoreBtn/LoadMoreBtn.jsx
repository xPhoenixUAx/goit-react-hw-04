/* eslint-disable react/prop-types */
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ load }) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={load}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
