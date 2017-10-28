import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { List } from 'immutable'

import styles from './styles.scss'

const Calendar = ({ events }) => ([
  <h2 key='title' className={styles.headTitle}>Upcoming Events</h2>,
  <div key='body' className={styles.cEvents}>{events.size > 0
    ? events.map((eventCard, i) => (
      <div key={eventCard.get('id')} className={styles.eventsCard}>
        <Link className={styles.link} to={eventCard.get('url')} target='_blank'>
          <h2 className={styles.eventsCardDate}>
            Date: {eventCard.get('title')}
          </h2>
          <img
            src={eventCard.getIn(['logo', 'src'])}
            alt={eventCard.getIn(['logo', 'alt'])} />
          <h2 className={styles.eventsCardTitle}>
            {eventCard.getIn(['name', 'text'])}
          </h2>
        </Link>
      </div>
    ))
    : <div>No Events to Display</div>}
  </div>,
])

Calendar.propTypes = {
  events: PropTypes.instanceOf(List).isRequired,
}

export default Calendar
