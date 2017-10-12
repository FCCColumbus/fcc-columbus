import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Calendar } from '../../components'
import { withRouter } from 'react-router-dom'
import { fetchEventsRequest } from '../../redux/actions'
import { connect } from 'react-redux'


class CalendarContainer extends Component {

  componentDidMount() {
    this.props.fetchEventsRequest()
  }
  render () {
    console.log(this.props.isFetching)
    console.log(this.props.eventList)
    return (
      <Calendar events={this.props.eventList} isFetching={this.props.isFetching}/>
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
    isFetching: state.calendarReducer.get('isFetching'),
  }
}

export default withRouter(connect(mapStateToProps, { fetchEventsRequest })(CalendarContainer))
