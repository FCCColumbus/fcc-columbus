import React from 'react';
import styles from './styles.module.scss';

function NetlifyBadge() {
  return (
    <a
      className={styles.container}
      href="https://www.netlify.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        alt="Deploys by Netlify"
        src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
      />
    </a>
  );
}

export default NetlifyBadge;
