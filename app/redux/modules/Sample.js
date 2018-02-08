// Realworld example that demonstrates a Redux module's flow including immutable.js

import { fetchHeroData } from 'helpers/api'
import { fromJS } from 'immutable'

const UPDATE_HERO_WAYPOINT = 'UPDATE_HERO_WAYPOINT'
const FETCHING_HERO = 'FETCHING_HERO'
const FETCHING_HERO_ERROR = 'FETCHING_HERO_ERROR'
const FETCHING_HERO_SUCCESS = 'FETCHING_HERO_SUCCESS'

export const updateHeroWaypoint = (waypoint) => ({
  type: UPDATE_HERO_WAYPOINT,
  waypoint,
})

const fetchingHero = () => ({
  type: FETCHING_HERO,
})

const fetchingHeroError = () => ({
  type: FETCHING_HERO_ERROR,
  error: 'error fetching hero',
})

const fetchingHeroSuccess = ({ title, ctaLink, body, footer }) => ({
  type: FETCHING_HERO_SUCCESS,
  title,
  ctaLink,
  body,
  footer,
})

export const fetchAndHandleHero = () => (dispatch) => {
  dispatch(fetchingHero())
  fetchHeroData()
    .then((data) => dispatch(fetchingHeroSuccess(data)))
    .catch((error) => dispatch(fetchingHeroError(error)))
}

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
    case UPDATE_HERO_WAYPOINT:
      return state.merge({
        waypointState: action.waypoint,
      })
    case FETCHING_HERO:
      return state.merge({
        isFetching: true,
      })
    case FETCHING_HERO_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error,
      })
    case FETCHING_HERO_SUCCESS:
      return state.merge({
        isFetching: false,
        error: '',
        title: action.title,
        ctaLink: action.ctaLink,
        body: action.body,
        footer: action.footer,
      })
    default:
      return state
  }
}

export default hero
