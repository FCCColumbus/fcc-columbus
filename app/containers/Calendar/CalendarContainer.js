import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Calendar } from '../../components'
import { withRouter } from 'react-router-dom'
import { fetchEventsRequest } from '../../redux/actions'
import { connect } from 'react-redux'
import { Map } from 'immutable'


class CalendarContainer extends Component {
  constructor() {
    super()
    this.state = {
      isFetching: true,
      events: [],
      errors: {},
    }
  }
  componentDidMount() {
    this.props.fetchEventsRequest()
  }
  render () {
    return (
      <Calendar />
    )
  }
}

CalendarContainer.propTypes = {
  fetchEventsRequest: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    eventList: state.calendarReducer.get('events').toJS(),
    errors: state.calendarReducer.get('errors'),
  }
}

export default withRouter(connect(mapStateToProps, { fetchEventsRequest, foobar })(CalendarContainer))
