import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.div}>
      <RotatingLines
        visible={true}
        height="35"
        width="35"
        color="gr"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass={styles.loader}
      />
    </div>
  );
};

export default Loader;
