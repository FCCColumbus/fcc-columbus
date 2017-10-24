import React, { Component } from 'react'
import { Navigation } from '../../components'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class NavigationContainer extends Component {
  constructor() {
    super()
    this.state = {
      mobileActive: false,
    }
    this.handleMobile = this.handleMobile.bind(this)
  }

  componentWillMount() {
   this.props.history.listen((location, action) => {
      if(action === "POP") {
        this.setState({ mobileActive: false })
      }
    })
  }

  handleMobile(e) {

    this.setState(prevState => ({
      mobileActive: prevState.mobileActive
        ? !prevState.mobileActive
        : true,
    }))
  }

  render() {
    return (
      <Navigation
        mobileActive={this.state.mobileActive}
        handleMobile={e => this.handleMobile(e)} />
    )
  }
}

NavigationContainer.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(NavigationContainer)
