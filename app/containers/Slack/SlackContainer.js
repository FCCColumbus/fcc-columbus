import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as slackActionCreators from 'redux/modules/slack'
import { Slack } from 'components'

class SlackContainer extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      firstName: '',
    }
  }
  handleOnChange(e) {
    const newValue = e.target.value
    const element = e.target.id

    this.setState({ [element]: newValue })
  }

  render () {
    return (
      <Slack post={this.props.postAndHandleEvents} handleOnChange={this.handleOnChange.bind(this)} />
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
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(slackActionCreators, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SlackContainer)
