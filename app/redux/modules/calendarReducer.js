import {FETCH_EVENTS, FETCHING, FETCH_EVENTS_FAILED} from '../actions'
import { fromJS } from 'immutable'

const initialState = fromJS({
  events: [],
  errors: '',
  isFetching: true,
})

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log(action.waypoint)
      return state.merge({
        events: action.waypoint.sort((a, b) => {
          return a.start.utc > b.start.utc
        }),
      })
    case FETCHING: {
      let fetching = state.get('isFetching')
      if(fetching) {
        fetching = false
      } else {
        fetching  = true
      }
      return state.merge({
        isFetching: fetching,
      })
    }
    case FETCH_EVENTS_FAILED:
      return state.merge({
        errors: 'Uh-oh, the calendar didn\'t load correctly. Please contact the FCCC adminstrators',
      })
    default:
      return state
  }
}

export default calendarReducer
