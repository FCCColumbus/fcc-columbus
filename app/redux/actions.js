export const FETCH_EVENTS ='FETCH_EVENTS'
export const FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED'
export const FETCHING = 'FETCHING'

const apiAddress = `https://www.eventbriteapi.com/v3/events/search/?user.id=209958981395&token=${process.env.EVENTBRITE_API_KEY}`

export const fetchEvents = (waypoint) => ({
  type: FETCH_EVENTS,
  waypoint,
})

export const fetchingEventsError = (error) => ({
  type: FETCH_EVENTS_FAILED,
  error,
})

export const isFetching = () => ({
  type: FETCHING,
})

export const fetchEventsRequest= () => {
  return (dispatch) => {
    fetch(apiAddress)
      .then((res) => {
        return res.json()
      })
      .then((content) => {
        dispatch(isFetching())
        dispatch(fetchEvents(content.events))
      })
      .catch((error) => {
        dispatch(fetchingEventsError(error))
      })
  }

}
