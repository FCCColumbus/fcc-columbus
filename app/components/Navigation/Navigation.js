import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

const Navigation = ({ links, menu, mobileActive, handleMobile }) => (
  <div>
    <div className={styles.nav}>
      <div className={styles.wrap}>
        <div className={styles.logoWrap}>
          <Link to='/' onClick={(e, close) => handleMobile(e, true)}>
            <div className={styles.logo}>
              FreeCodeCamp<i className='fa fa-free-code-camp' />
            </div>
          </Link>
        </div>
        <nav className={styles.links}>
          {links.map(({ href, title }) => (
            <Link key={href} className={styles.navLink} to={href}>
              <div className={styles.link}>{title}</div>
            </Link>
          ))}
          <button
            onClick={(e) => handleMobile(e)}
            className={styles.menu}>
            {menu}
          </button>
        </nav>
      </div>
    </div>
    <div className={mobileActive
      ? `${styles.show} ${styles.dropdown}`
      : styles.dropdown}>
      <div className={styles.dropdownWrap}>
        {links.map(({ href, title }) => (
          <Link key={href} to={href} onClick={(e) => handleMobile(e)}>
            <div className={styles.dropdownLink}>{title}</div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
  menu: PropTypes.string.isRequired,
  mobileActive: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
}

export default Navigation
