import React, { Component } from 'react'
import { Navigation } from '../../components'

class NavigationContainer extends Component {
  constructor() {
    super()
    this.state = {
      mobileActive: false,
    }
    this.handleMobile = this.handleMobile.bind(this)
  }

  handleMobile(e) {
    e.preventDefault()

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

export default NavigationContainer
