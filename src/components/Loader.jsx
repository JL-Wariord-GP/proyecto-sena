import styles from "../css/login.module.css";

const Loader = () => (
  <div className={styles.loaderPill}>
    <div className={styles["loaderPill-anim"]}>
      <div className={styles["loaderPill-anim-bounce"]}>
        <div className={styles["loaderPill-anim-flop"]}>
          <div className={styles["loaderPill-pill"]}></div>
        </div>
      </div>
    </div>
    <div className={styles["loaderPill-floor"]}>
      <div className={styles["loaderPill-floor-shadow"]}></div>
    </div>
    <div className={styles["loaderPill-text"]}></div>
  </div>
);

export default Loader;
