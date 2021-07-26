import React from 'react';
import styles from './styles.module.scss';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h1>Free Code Camp Columbus</h1>
      </div>
      <div className={styles.logo}>
        <img className={styles.image} src="images/fccc-logo.png" alt="Free Code Camp Logo" />
      </div>
      <button className={styles.joinNow} type="button">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://join.slack.com/t/freecodecampcolumbus/shared_invite/zt-thc7o8xs-ELyMJyaPWAeuNyI3vaETBA"
        >
          Join Our Slack Community!
        </a>
      </button>
    </div>
  </section>
);

export default Hero;
