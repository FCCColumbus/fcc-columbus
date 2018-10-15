import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './styles.scss'

export const sortArrayByName = (arr) =>
  arr.sort((a, b) => {
    a = a.name.last + a.name.first
    b = b.name.last + b.name.first

    if (a < b) return -1
    if (a > b) return 1

    return 0
  })

export const Card = ({ name, title, url, image }) => (
  <li className={styles.admin}>
    <div className={styles.name}>
      {name.first} {name.last}
    </div>
    <Link to={url} target="_blank" rel="noopener noreferrer" title={`Go to ${name.first}'s LinkedIn Profile`}>
      <div className={styles.image}>
        <img src={image} alt={`admin, ${name.first}.`} className={styles.face} />
      </div>
    </Link>
    <div className={styles.job}>{title}</div>
  </li>
)

Card.propTypes = {
  name: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

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
)

Admins.propTypes = {
  admins: PropTypes.any,
}

export default Admins
