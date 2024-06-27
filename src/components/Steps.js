import styles from "../styles/Components.module.css";

const Steps = () => {
  return (
    <div className={styles.steps}>
      <h2>How it works ?</h2>
      <div className={styles.stepItems}>
        <div className={styles.stepItem}>
          <p>Answer few questions</p>
        </div>
        <div className={styles.stepItem}>
          <p>Register using phone and OTP</p>
        </div>
        <div className={styles.stepItem}>
          <p>Get report and personal roadmap</p>
        </div>
      </div>
      <button className={styles.getStartedButton}>Get Started</button>
    </div>
  );
};

export default Steps;
