import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List } from 'immutable'

import * as calendarActionCreators from 'redux/modules/calendar'
import { Calendar } from 'components'

class CalendarContainer extends Component {
  componentDidMount() {
    this.props.fetchAndHandleEvents()
  }

  render () {
    return (this.props.isFetching
      ? <p>Loading Events...</p>
      : <Calendar events={this.props.events} />
    )
  }
}

CalendarContainer.propTypes = {
  fetchAndHandleEvents: PropTypes.func.isRequired,
  events: PropTypes.instanceOf(List).isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ calendar }) => ({
  events: calendar.get('events'),
  isFetching: calendar.get('isFetching'),
  error: calendar.get('error'),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(calendarActionCreators, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarContainer)
