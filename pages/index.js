import styles from "../styles/Home.module.css";
import Image from "next/image";
import hero from "../img/illustration-hero.svg";
import iconMusic from "../img/icon-music.svg";
const index = () => {
  return (
    <div className={styles.container}>
      <Image src={hero} className={styles.img} alt="hero !!" />
      <h1 className={styles.h3}>Order Summary</h1>

      <p className={styles.summaryDetails}>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className={styles.subContainer}>
        <Image src={iconMusic} className={styles.icon} alt="music icon" />
        <div className={styles.subYearly}>
          <p>Annual Plan</p>
          <p>$59.99/year</p>
        </div>

        <p className={styles.subChanger}>
          <a href="#">Change</a>
        </p>
      </div>

      <button className={styles.btn}>Proceed to Payment</button>

      <button className={styles.cancelOrder}>Cancel Order</button>
    </div>
  );
};

export default index;
