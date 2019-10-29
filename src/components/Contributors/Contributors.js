import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Contributor = (props) => (
  <li className={styles.contributor}>
    <img className={styles.avatar} src={props.avatar} alt={`${props.username} avatar`} />
    <a className={styles.userLink} href={props.url} target="_blank" rel="noopener noreferrer">
      @{props.username}
    </a>
  </li>
);

Contributor.propTypes = {
  avatar: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

const Contributors = (props) => (
  <section className={styles.container}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h2>Meet the Contributors</h2>
      </div>
      {props.isLoading && <p>Loading...</p>}
      {!props.isLoading && (
        <ul className={styles.wrap}>
          {props.contributors.map((user) => (
            <Contributor key={user.username} {...user} />
          ))}
        </ul>
      )}
    </div>
  </section>
);

Contributors.propTypes = {
  contributors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Contributors;
