import React from 'react'
// import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Mutation, Query } from 'react-apollo'

import styles from './styles.scss'

function handleInputRef(node, data) {
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
const GetUsers = () => (
  <Query
    query={gql`
      {
        slack {
          users {
            active
            registered
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (error) return 'error'

      const active = data.slack ? data.slack.users.active : 0
      const registered = data.slack ? data.slack.users.registered : 0

      return (
        <p className={`${styles.center} ${styles.info}`}>
          <span className={styles.online}>{active}</span> users online now of{' '}
          <span className={styles.totalOnline}>{registered}</span> registered.
        </p>
      )
    }}
  </Query>
)

const Slack = () => {
  let nameInput
  let emailInput
  const message = ''

  return (
    <Mutation mutation={SLACK_INVITE}>
      {(createSlackInvite, { data, loading, error }) => (
        <div className={styles.container}>
          <div className={styles.logos}>
            <img className={styles.fcccLogo} src="/images/fccc-logo.png" alt="" />
            <div className={styles.plus} />
            <img className={styles.slackLogo} src="/images/slack.png" alt="" />
          </div>
          <h1 className={`${styles.title} ${styles.center}`}>
            Join <span className={styles.bold}>FreeCodeCamp Columbus</span> on Slack.
          </h1>
          <GetUsers />
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
              <input
                id="email"
                name="email"
                className={styles.input}
                type="text"
                placeholder="you@yourdomain.com"
                autoComplete="off"
                ref={(node) => (emailInput = handleInputRef(node, data))}
              />
            </label>
            <label htmlFor="name" className={styles.label}>
              <input
                id="firstName"
                name="name"
                className={styles.input}
                type="text"
                placeholder="First Name"
                autoComplete="off"
                ref={(node) => (nameInput = handleInputRef(node, data))}
              />
            </label>
            <button className={styles.submit} type="submit">
              GET MY INVITE
            </button>
            <div className={styles.status}>
              <p>
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
