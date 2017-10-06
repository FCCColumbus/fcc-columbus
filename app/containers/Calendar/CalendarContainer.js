import React, { Component } from 'react'
import { ComingSoon } from '../../components'
import { withRouter } from 'react-router-dom'
import { fetchEventsRequest, foobar } from '../../redux/actions'
import { connect } from 'react-redux'


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
    this.props.foobar()
    this.props.fetchEventsRequest()
  }
  render () {
    return (
      <ComingSoon title='Calendar' />
    )
  }
}

function mapStateToProps(state) {
  return {
    eventList: state.events,
    errors: state.errors,
  }
}

export default withRouter(connect(mapStateToProps, { fetchEventsRequest, foobar })(CalendarContainer))
