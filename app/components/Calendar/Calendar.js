import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styles from './styles.scss'

const Events = () => (
  <Query
    query={gql`
      {
        events {
          name
          url
          start
          end
          free
          logo
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading || error || !data.events.length) {
        let str = 'No events are scheduled at this time.'

        if (loading) str = 'loading...'
        if (error)
          str = 'An error has occured while fetching our events. Feel free to report this issue to a group admin.'

        return <p className={styles.eventsInfo}>{str}</p>
      }

      return data.events.map((k) => Event(k))
    }}
  </Query>
)

const Event = ({ name, url, start, logo }) => {
  const date = new Date(start)

  return (
    <div key={name} className={styles.eventsCard}>
      <Link className={styles.link} to={url} target="_blank">
        <h2 className={styles.eventsCardDate}>
          Date: {date.getMonth() + 1}-{date.getDate()}-{date.getFullYear()}
        </h2>
        <img className={styles.logo} src={logo} alt={name} />
        <h2 className={styles.eventsCardTitle}>{name}</h2>
      </Link>
    </div>
  )
}

Event.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  start: PropTypes.string,
  logo: PropTypes.string,
}

const Calendar = () => (
  <section>
    <h2 className={styles.headTitle}>Upcoming Events</h2>
    <div className={styles.cEvents}>
      <Events />
    </div>
  </section>
)

export default Calendar
