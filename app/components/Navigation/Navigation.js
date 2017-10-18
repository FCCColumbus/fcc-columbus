import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const Navigation = ({ mobileActive, handleMobile }) => (
  <div>
    <div className={styles.nav}>
      <div className={styles.wrap}>
        <div className={styles.logoWrap}>
          <Link to='/'>
            <div className={styles.logo}>
              FreeCodeCamp<i className='fa fa-free-code-camp' />
            </div>
          </Link>
        </div>
        <nav className={styles.links} >
          <Link className={styles.navLink} to='/members'>
            <div className={styles.link}>Members</div>
          </Link>
          <Link className={styles.navLink} to='/slack'>
            <div className={styles.link}>Slack</div>
          </Link>
          <Link className={styles.navLink} to='/calendar'>
            <div className={styles.link}>Calendar</div>
          </Link>
          <Link className={styles.navLink} to='/signin'>
            <div className={styles.link}>Sign In</div>
          </Link>
          <button
            onClick={e => handleMobile(e)}
            className={styles.menu}>
            Menu
          </button>
        </nav>
      </div>
    </div>
    <div className={mobileActive
      ? `${styles.show} ${styles.dropdown}`
      : styles.dropdown}>
      <div className={styles.dropdownWrap}>
        <Link to='/members' onClick={e => handleMobile(e)}>
          <div className={styles.dropdownLink}>Members</div>
        </Link>
        <Link to='/slack' onClick={e => handleMobile(e)}>
          <div className={styles.dropdownLink}>Slack</div>
        </Link>
        <Link to='/calendar' onClick={e => handleMobile(e)}>
          <div className={styles.dropdownLink}>Calendar</div>
        </Link>
        <Link to='/signin' onClick={e => handleMobile(e)}>
          <div className={styles.dropdownLink}>Sign In</div>
        </Link>
      </div>
    </div>
  </div>
)

Navigation.propTypes = {
  mobileActive: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
}

export default Navigation
