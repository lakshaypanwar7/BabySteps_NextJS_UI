import styles from "../styles/Components.module.css";
import Image from "next/image";
import smartphoneImage from "../../public/smartphone.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Check your financial health</h1>
      <p>
        Use WeathoMeter to get a free report card for your finances - within
        minutes!
      </p>
      <button className={styles.getStartedButton}>Get Started</button>

      <div className={styles.headerContent}>
        <div className={styles.textLeft}>
          <p> - Expected Retirement Age</p>
          <p> - Identify Mistakes</p>
        </div>
        <div className={styles.smartphoneContainer}>
          <Image
            src={smartphoneImage}
            alt="Smartphone displaying financial health"
            width={200}
            height={400}
            className={styles.smartphoneImage}
          />
        </div>
        <div className={styles.textRight}>
          <p> - Personalized Road Map</p>
          <p> - Tips to Improve</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
