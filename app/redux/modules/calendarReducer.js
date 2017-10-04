import {FETCH_EVENTS, FETCH_EVENTS_FAILED} from '../actions'
import { fromJS } from 'immutable'

const initialState = fromJS({
  isFetching: true,
  error: '',
  waypointState: false,
  title: {
    focused: '',
    text: '',
  },
  ctaLink: '',
  body: '',
  footer: '',
})

const hero = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return state.merge({
        waypointState: action.waypoint,
      })
    case FETCH_EVENTS_FAILED:
      return state.merge({
        isFetching: false,
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
    default:
      return state
  }
}

export default hero
