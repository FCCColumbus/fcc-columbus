import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const Admins = () => (
  <div className={styles.admins}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h2>Meet the Admins</h2>
      </div>
      <div className={styles.admin}>
        <div className={styles.name}>Justin Woodward</div>
        <Link
          to='https://www.linkedin.com/in/justin-woodward'
          target='_blank'
          rel='noopener noreferrer'
          title={'Go to Justin\'s LinkedIn Profile'}>
          <div className={styles.image}>
            <img
              src='images/justin.jpg'
              alt='admin, Justin.'
              className={styles.face} />
          </div>
        </Link>
        <div className={styles.job}>Software Developer</div>
      </div>
      <div className={styles.admin}>
        <div className={styles.name}>Dan Stockham</div>
        <Link
          to='https://linkedin.com/in/danstockham'
          target='_blank'
          rel='noopener noreferrer'
          title={'Go to Dan\'s LinkedIn Profile'}>
          <div className={styles.image}>
            <img
              src='images/dan.jpg'
              alt='admin, Dan.'
              className={styles.face} />
          </div>
        </Link>
        <div className={styles.job}>Software Developer</div>
      </div>
      <div className={styles.admin}>
        <div className={styles.name}>Kevin Bruland</div>
        <Link
          to='https://www.linkedin.com/in/kevin-bruland-66083b132'
          target='_blank'
          rel='noopener noreferrer'>
          <div className={styles.image}>
            <img
              src='images/kevin.jpg'
              alt='admin, Kevin.' className={styles.face}
              title={'Go to Kevin\'s LinkedIn Profile'} />
          </div>
        </Link>
        <div className={styles.job}>Frontend Developer</div>
      </div>
      <div className={styles.admin}>
        <div className={styles.name}>Sarah Bruland</div>
        <Link
          to='https://www.linkedin.com/in/sarahlillybruland/'
          rel='noopener noreferrer'
          title={'Go to Sarah\'s LinkedIn Profile'}>
          <div className={styles.image}>
            <img
              src='images/sarah.jpg'
              alt='admin, Sarah.'
              className={styles.face}
              onClick={(e) => e.preventDefault()} />
          </div>
        </Link>
        <div className={styles.job}>Frontend Developer</div>
      </div>
    </div>
  </div>
)

Admins.propTypes = {

}

export default Admins
