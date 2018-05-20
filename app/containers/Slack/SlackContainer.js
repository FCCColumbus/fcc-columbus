import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Map } from 'immutable'

import * as slackActionCreators from 'redux/modules/slack'
import { Slack } from 'components'

class SlackContainer extends Component {
  handlePost() {
    // this.props.validateFields()
    this.props.postInvite()
  }

  handleInputChange(e) {
    this.props.updateFields({
      name: e.target.getAttribute('name'),
      value: e.target.value,
    })
  }

  render() {
    return (
      <Slack
        isFetching={this.props.isFetching}
        success={this.props.success}
        error={this.props.error}
        message={this.props.message}
        handlePost={() => this.handlePost()}
        fields={this.props.fields}
        handleInputChange={(e) => this.handleInputChange(e)}
      />
    )
  }
}

SlackContainer.propTypes = {
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  updateFields: PropTypes.func.isRequired,
  postInvite: PropTypes.func.isRequired,
  fields: PropTypes.instanceOf(Map),
}

const mapStateToProps = ({ slack }) => ({
  success: slack.get('success'),
  error: slack.get('error'),
  isFetching: slack.get('isFetching'),
  updateFields: slack.get('updateFields'),
  fields: slack.get('fields'),
  message: slack.get('message'),
})

const mapDispatchToProps = (dispatch) => bindActionCreators(slackActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SlackContainer)
