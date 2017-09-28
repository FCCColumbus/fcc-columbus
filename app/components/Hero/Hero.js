import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h1>Free Code Camp Columbus</h1>
      </div>
      <div className={styles.logo}>
        <img className={styles.image} src='images/fccc-logo.png' alt='Free Code Camp Logo' />
      </div>
      <Link className={styles.joinNow} to='/slack'>Join Our Slack Community!</Link>
    </div>
  </div>
)

export default Hero
