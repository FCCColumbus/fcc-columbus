import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import styles from './styles.scss'

const Slack = ({ handleInputChange, handlePost, success, error, isFetching, fields, message }) => {
  const enableSubmit = fields.get('name').length > 0 && fields.get('email').length > 0

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <label htmlFor="email" className={styles.label}>
          Please enter the address where you like to receive the invite
          <input
            id="email"
            name="email"
            className={styles.input}
            type="text"
            onKeyUp={(e) => (e.keyCode === 13 && enableSubmit ? handlePost() : false)}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label htmlFor="name" className={styles.label}>
          What is your first name?
          <input
            id="firstName"
            name="name"
            className={styles.input}
            type="text"
            onKeyUp={(e) => (e.keyCode === 13 && enableSubmit ? handlePost() : false)}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <button
          className={`${styles.btn} ${styles.submit} ${!enableSubmit && styles.disable}`}
          type="submit"
          onClick={() => (enableSubmit ? handlePost() : false)}
          onKeyUp={(e) => (e.keyCode === 13 && enableSubmit ? handlePost() : false)}
        >
          Submit
        </button>
        <div className={styles.status}>
          <p>
            STATUS:
            {!success && !error && !isFetching}
          </p>
          <p>{message}</p>
          {isFetching && <p>Posting...</p>}
        </div>
      </div>
    </div>
  )
}

Slack.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handlePost: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fields: PropTypes.instanceOf(Map),
}

export default Slack
