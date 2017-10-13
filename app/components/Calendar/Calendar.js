import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import styles from './styles.scss'

const Calendar = (props) => {
  return (
    <div>
      <h2 className={styles.cEvents__headTitle}>Upcoming Events</h2>
      <div className={styles.cEvents}>
      {
        props.eventList !== [] ?
        props.eventList.map((curr, idx) => {
          let date = new Date(curr.start.utc)

          return <div key={idx} className={styles.cEvents__eventsCard}>
            <a href={curr.url} target='_blank'>
              <h2 className={styles.cEvents__eventsCardDate}>{`${date.getMonth() + 1}/${date.getDate()}`}</h2>
              <img src={curr.logo.url} alt={`${date.getMonth() + 1}/${date.getDate()} ${curr.name.text}`} />
              <h2 className={styles.cEvents__eventsCardTitle}>{`${curr.name.text}`}</h2>
            </a>
          </div>
        })
        :
        <div>No Events to Display</div>
      }
      </div>
    </div>
  )
}

Calendar.propTypes = {
  eventList: PropTypes.array,
}

export default withRouter(Calendar)
