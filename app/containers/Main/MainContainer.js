import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { NavigationContainer } from 'containers'
import styles from './styles.scss'

// eslint-disable-next-line react/prefer-stateless-function
export class MainContainer extends Component {
  render() {
    return (
      <Fragment>
        <NavigationContainer />
        <div className={styles.container}>{this.props.children}</div>
      </Fragment>
    )
  }
}

MainContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

MainContainer.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(MainContainer)
