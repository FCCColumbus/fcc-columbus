import {FETCH_EVENTS, FETCH_EVENTS_FAILED, FOOBAR} from '../actions'
import { fromJS } from 'immutable'

const initialState = fromJS({
  events: [],
  error: '',
})

const calendarReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_EVENTS:
      return state.merge({
        events: action.waypoint,
      })
    case FETCH_EVENTS_FAILED:
      return state.merge({
        error: action.error,
      })
    // case FETCHING_HERO_SUCCESS:
    //   return state.merge({
    //     isFetching: false,
    //     error: '',
    //     title: action.title,
    //     ctaLink: action.ctaLink,
    //     body: action.body,
    //     footer: action.footer,
    //   })
    case FOOBAR:
      return state
    default:
      return state
  }
}

export default calendarReducer
