import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as slackActionCreators from 'redux/modules/slack'
import { Slack } from 'components'

class SlackContainer extends Component {
  handleOnChange() {
    
  }

  render () {
    return (
      <Slack post={this.props.postAndHandleEvents} handleOnChange={this.handleOnChange} />
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
  success: slack.get('success'),
  error: slack.get('error'),
  isFetching: slack.get('isFetching'),
  data: slack.get('data'),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(slackActionCreators, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SlackContainer)
