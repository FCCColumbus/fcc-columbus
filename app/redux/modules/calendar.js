import { fromJS } from 'immutable'
import { fetchCalendarData } from 'helpers/api'

const FETCHING_CALENDAR = 'FETCHING_CALENDAR'
const FETCHING_CALENDAR_ERROR = 'FETCHING_CALENDAR_ERROR'
const FETCHING_CALENDAR_SUCCESS = 'FETCHING_CALENDAR_SUCCESS'

const fetchingCalendar = () => ({
  type: FETCHING_CALENDAR,
})

const fetchingCalendarError = () => ({
  type: FETCHING_CALENDAR_ERROR,
  error: `'Uh-oh, the calendar didn't load correctly. Please contact the FCCC adminstrators`,
})

const fetchingCalendarSuccess = (data) => ({
  type: FETCHING_CALENDAR_SUCCESS,
  events: data,
})

export const fetchAndHandleEvents = () => (dispatch) => {
  dispatch(fetchingCalendar())
  fetchCalendarData()
    .then((res) => dispatch(fetchingCalendarSuccess(res)))
    .catch((err) => dispatch(fetchingCalendarError(err)))
}

const initialState = fromJS({
  events: [],
  error: '',
  isFetching: true,
})

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CALENDAR:
      return state.merge({
        isFetching: true,
      })
    case FETCHING_CALENDAR_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error,
      })
    case FETCHING_CALENDAR_SUCCESS:
      return state.merge({
        isFetching: false,
        error: '',
        events: action.events,
      })
    default:
      return state
  }
}

export default calendar
