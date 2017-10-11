import {FETCH_EVENTS, FETCH_EVENTS_FAILED, FOOBAR} from '../actions'
import { fromJS } from 'immutable'

const initialState = fromJS({
  events: [],
  errors: '',
})

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log(action.waypoint)
      return state.merge({
        events: action.waypoint,
      })
    case FETCH_EVENTS_FAILED:
      return state.merge({
        errors: action.error,
      })
    case FOOBAR:
      return state
    default:
      return state
  }
}

export default calendarReducer
