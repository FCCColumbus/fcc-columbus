import axios from 'axios'
import { calendarAPI } from 'config/config'

export const TDD = true

export const fetchCalendarData = () => (
  axios.get(calendarAPI)
    .then(({ data }) => data)
)
