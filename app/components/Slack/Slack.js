import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'

const Slack = (props) => (
    <div className="slack-form">
        <label htmlFor="email">Please enter the address where you like to receive the invite</label>
        <input name="email" type="text"/>
        <label htmlFor="name">What is your first name?</label>
        <input name="name" type="text"/>
        <button type="submit">Submit</button>
    </div>
)

Slack.propTypes = {

}

export default Slack
