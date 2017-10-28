import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Navigation } from 'components'

class NavigationContainer extends Component {
  constructor () {
    super()
    this.state = {
      mobileActive: false,
      links: [
        {
          href: '/members',
          title: 'Members',
        },
        {
          href: '/slack',
          title: 'Slack',
        },
        {
          href: '/calendar',
          title: 'Calendar',
        },
        {
          href: '/signin',
          title: 'Sign In',
        },
      ],
      menu: 'Menu',
    }
  }

  componentDidMount () {
   this.props.history.listen((location, action) => {
      if(action === "POP") {
        this.setState({ mobileActive: false })
      }
    })
  }

  handleMobile (e, close) {
    if (close && !this.state.mobileActive) {
      return
    }

    this.setState((prevState) => ({
      mobileActive: prevState.mobileActive
        ? !prevState.mobileActive
        : true,
    }))
  }

  render () {
    return (
      <Navigation
        links={this.state.links}
        menu={this.state.menu}
        mobileActive={this.state.mobileActive}
        handleMobile={(e, close) => this.handleMobile(e, close)} />
    )
  }
}

NavigationContainer.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(NavigationContainer)
