import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export const sortArrayByName = (arr) =>
  arr.sort((a, b) => {
    const prev = a.name.last + a.name.first;
    const current = b.name.last + b.name.first;

    if (prev < current) return -1;
    if (prev > current) return 1;

    return 0;
  });

export const Card = ({ name, title, url, image }) => (
  <li className={styles.admin}>
    <div className={styles.name}>
      {name.first} {name.last}
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Go to ${name.first}'s LinkedIn Profile`}
    >
      <div className={styles.image}>
        <img src={image} alt={`admin, ${name.first}.`} className={styles.face} />
      </div>
    </a>
    <div className={styles.job}>{title}</div>
  </li>
);

Card.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Admins = ({ admins }) => (
  <section className={styles.admins}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h2>Meet the Admins</h2>
      </div>
      <ul className={styles.wrap}>
        {sortArrayByName(admins).map((k) => (
          <Fragment key={k.name.last + k.name.first}>{Card(k)}</Fragment>
        ))}
      </ul>
    </div>
  </section>
);

Admins.propTypes = {
  admins: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default Admins;
