import axios from 'axios'
import { calendarAPI } from 'config/config'
// import MockAdapter from 'axios-mock-adapter'

export const TDD = true

export const fetchCalendarData = () => (
  axios.get(calendarAPI)
    .then(({ data }) => data)
)
