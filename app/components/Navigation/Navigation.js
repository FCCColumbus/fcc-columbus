import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

const Navigation = ({ links, menu, mobileActive, handleMobile }) => (
  <header>
    <div className={styles.nav}>
      <div className={styles.wrap}>
        <div className={styles.logoWrap}>
          <Link to="/" onClick={(e) => handleMobile(e, true)}>
            <div className={styles.logo}>
              FreeCodeCamp
              <i className="fa fa-free-code-camp" />
            </div>
          </Link>
        </div>
        <nav className={styles.links}>
          {links.map(({ href, title }) => (
            <Link key={href} className={styles.navLink} to={href}>
              <div className={styles.link}>{title}</div>
            </Link>
          ))}
          <button onClick={handleMobile} className={styles.menu}>
            {menu}
          </button>
        </nav>
      </div>
    </div>
    <div className={mobileActive ? `${styles.show} ${styles.dropdown}` : styles.dropdown}>
      <div className={styles.dropdownWrap}>
        {links.map(({ href, title }) => (
          <Link key={href} to={href} onClick={handleMobile}>
            <div className={styles.dropdownLink}>{title}</div>
          </Link>
        ))}
      </div>
    </div>
  </header>
)

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
  menu: PropTypes.string.isRequired,
  mobileActive: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
}

export default Navigation
