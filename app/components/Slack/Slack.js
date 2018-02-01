import React from 'react'
// import styles from './styles.scss'
import PropTypes from 'prop-types'

const Slack = (props) => (
    <div className='slack-form'>
        <label htmlFor='email'>Please enter the address where you like to receive the invite</label>
        <input id='email' 
            name='email' 
            type='text' 
            onChange={props.handleOnChange}/>
        <label htmlFor='name'>What is your first name?</label>
        <input id='firstName' 
            name='name' type='text' 
            onChange={props.handleOnChange}/>
        <button 
            type='submit' 
            onClick={props.post}>Submit</button>
    </div>
)

Slack.propTypes = {
    post: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
}

export default Slack
