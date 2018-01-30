import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as slackActionCreators from 'redux/modules/slack'
import { Slack } from 'components'

class SlackContainer extends Component {
  render () {
    return (
      <Slack />
    )
  }
}

SlackContainer.propTypes = {
  postAndHandleEvents: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ slack }) => ({
  success: slack,
  error: slack,
  isFetching: slack,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(slackActionCreators, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SlackContainer)
