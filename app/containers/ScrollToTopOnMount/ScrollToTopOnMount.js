import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

export class ScrollToTopOnMount extends Component {
  /* istanbul ignore next */
  componentDidUpdate(prevProps) {
    const { hash } = window.location

    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }

    if (hash !== '') {
      this.hashLinkScroll(hash)
    }
  }

  /* istanbul ignore next */
  hashLinkScroll(hash) {
    setTimeout(() => {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView()
      }

      const scrolledY = window.scrollY

      if (scrolledY) {
        window.scroll(0, scrolledY)
      }
    }, 0)
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}

ScrollToTopOnMount.propTypes = {
  location: PropTypes.object,
  children: PropTypes.object,
}

export default withRouter(ScrollToTopOnMount)
