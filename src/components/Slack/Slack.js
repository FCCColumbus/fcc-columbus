import React from 'react';
// import PropTypes from 'prop-types'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

import styles from './styles.module.scss';

export function handleInputRef(node, data) {
  const updatedNode = node;

  /* istanbul ignore else */
  if (data && data.createSlackInvite.status) {
    updatedNode.value = '';
  }

  return updatedNode;
}

const GET_USERS = gql`
  {
    slack {
      users {
        active
        registered
      }
    }
  }
`;

export const GetUsers = () => {
  const { error, loading, data } = useQuery(GET_USERS);

  if (error) {
    return (
      <p className={`${styles.center} ${styles.info}`}>
        We are unable to fetch online users at this time.
      </p>
    );
  }

  if (loading) {
    return <p className={`${styles.center} ${styles.info}`}>Loading online users...</p>;
  }

  const active = data.slack ? data.slack.users.active : 0;
  const registered = data.slack ? data.slack.users.registered : 0;

  return (
    <p className={`${styles.center} ${styles.info}`}>
      <span className={styles.online}>{active}</span> users online now of{' '}
      <span className={styles.totalOnline}>{registered}</span> registered.
    </p>
  );
};

const SLACK_INVITE = gql`
  mutation createSlackInvite($name: String!, $email: String!) {
    createSlackInvite(name: $name, email: $email) {
      message
      status
    }
  }
`;

const Slack = () => {
  let nameInput;
  let emailInput;
  const message = '';

  const [createSlackInvite, { data, loading, error }] = useMutation(SLACK_INVITE);

  return (
    <section className={styles.container}>
      <div className={styles.logos}>
        <img className={styles.fcccLogo} src="/images/fccc-logo.png" alt="" />
        <div className={styles.plus} />
        <img className={styles.slackLogo} src="/images/slack.png" alt="" />
      </div>
      <h1 className={`${styles.title} ${styles.center}`}>
        Join <span className={styles.bold}>FreeCodeCamp Columbus</span> on Slack.
      </h1>
      <GetUsers />
      <p className={styles.slackDescription}>
        {
          "Slack is a free chat client used by lots of tech industry businesses, so it's a good idea to get familiar with it while you're in the process of learning to code. It's great for developers because it has features to make sharing code easy. Our group uses Slack to ask and answer coding questions, showcase projects, share jobs, advertise our events, and just chat. Slack will help you connect with other Free Code Camp Columbus members quickly and easily."
        }
      </p>
      <form
        className={styles.innerContainer}
        onSubmit={(e) => {
          e.preventDefault();
          createSlackInvite({
            variables: { name: nameInput.value, email: emailInput.value },
          });
        }}
      >
        <label htmlFor="email" className={styles.label}>
          <span className={styles.visuallyhidden}>Email: </span>
          <input
            id="email"
            name="email"
            className={styles.input}
            type="email"
            placeholder="you@yourdomain.com"
            autoComplete="off"
            ref={(node) => {
              emailInput = handleInputRef(node, data);

              return emailInput;
            }}
          />
        </label>
        <label htmlFor="name" className={styles.label}>
          <span className={styles.visuallyhidden}>First Name: </span>
          <input
            id="firstName"
            name="name"
            className={styles.input}
            type="text"
            placeholder="First Name"
            autoComplete="off"
            ref={(node) => {
              nameInput = handleInputRef(node, data);

              return nameInput;
            }}
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
    </section>
  );
};

Slack.propTypes = {};

export default Slack;
