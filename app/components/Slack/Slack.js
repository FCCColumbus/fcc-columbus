import React from 'react'
// import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styles from './styles.scss'

const handleInputRef = (node, data) => {
  if (data && data.createSlackInvite.status) {
    node.value = ''
  }

  return node
}

const SLACK_INVITE = gql`
  mutation createSlackInvite($name: String!, $email: String!) {
    createSlackInvite(name: $name, email: $email) {
      message
      status
    }
  }
`
const Slack = () => {
  let nameInput
  let emailInput
  const message = 'Awaiting input...'

  return (
    <Mutation mutation={SLACK_INVITE}>
      {(createSlackInvite, { data, loading, error }) => (
        <div className={styles.container}>
          <form
            className={styles.innerContainer}
            onSubmit={(e) => {
              e.preventDefault()
              createSlackInvite({
                variables: { name: nameInput.value, email: emailInput.value },
              })
            }}
          >
            <label htmlFor="email" className={styles.label}>
              Please enter the address where you like to receive the invite
              <input
                id="email"
                name="email"
                className={styles.input}
                type="text"
                ref={(node) => (emailInput = handleInputRef(node, data))}
              />
            </label>
            <label htmlFor="name" className={styles.label}>
              What is your first name?
              <input
                id="firstName"
                name="name"
                className={styles.input}
                type="text"
                ref={(node) => (nameInput = handleInputRef(node, data))}
              />
            </label>
            <button className={`${styles.btn} ${styles.submit}`} type="submit">
              Submit
            </button>
            <div className={styles.status}>
              <p>
                <strong>Status: </strong>
                {loading && 'Posting...'}
                {data && data.createSlackInvite.message}
                {error && error.message}
                {!loading && !data && !error && message}
              </p>
            </div>
          </form>
        </div>
      )}
    </Mutation>
  )
}

Slack.propTypes = {}

export default Slack
