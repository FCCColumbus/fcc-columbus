import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ComingSoon = ({ title }) => (
  <section className={styles.container}>{title} Page Coming Soon.</section>
);

ComingSoon.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ComingSoon;
