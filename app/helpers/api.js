import axios from 'axios'
import { slackAPI, isProd } from 'config/config'

const HOST = isProd ? slackAPI : ''

export const TDD = true

export const postSlackInvite = async (invite) => {
  const res = (await axios.post(`${HOST}/api/invite`, invite).catch((err) => err.response)) || {}

  return res
}
