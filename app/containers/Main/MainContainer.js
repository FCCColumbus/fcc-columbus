import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { NavigationContainer } from 'containers'
import styles from './styles.scss'

class MainContainer extends Component {
  componentDidMount() {}

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
