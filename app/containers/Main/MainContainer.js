import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { NavigationContainer } from 'containers'
import styles from './styles.scss'

class MainContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavigationContainer />
        <div className={styles.innerContainer}>
          {this.props.children}
        </div>
      </div>
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
