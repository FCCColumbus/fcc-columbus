const FETCH_EVENTS ='FETCH_EVENTS'
const FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED'

export const fetchEvents = (waypoint) => ({
  type: FETCH_EVENTS,
  waypoint,
})

const fetchingEventsError = () => ({
  type: FETCH_EVENTS_FAILED,
  error: 'error fetching events',
})

export const fetchEventsRequest= () => {
  const apiAddress = `https://www.eventbriteapi.com/v3/users/me/?token=${process.env.EVENTBRITE_API_KEY}`
  dispatch => {
    fetch(apiAddress)
      .then((res) => {

        dispatch(fetchEvents(res.json()))
      })
      .catch((error) => {

        dispatch(fetchingEventsError())
      })

}
}
