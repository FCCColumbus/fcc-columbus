import axios from 'axios'
import { calendarAPI, slackAPI } from 'config/config'

export const TDD = true

export const fetchCalendarData = () => (
  axios.get(calendarAPI)
    .then(({ data }) => data)
)

export const postSlackInvite = (invite) => (
  axios.post(slackAPI, { invite })
    .then((res) => {
      if(!res.ok) {
        throw Error(res.data)
      }

      return res.json()
    })
    .catch((err) => {
      return err
    })
)
