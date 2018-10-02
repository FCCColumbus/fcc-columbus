import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const ComingSoon = ({ title }) => <section className={styles.container}>{title} Page Coming Soon.</section>

ComingSoon.propTypes = {
  title: PropTypes.string,
}

export default ComingSoon
