import axios from 'axios'
import { slackAPI, isProd } from 'config/config'

/* istanbul ignore next */
const HOST = isProd ? slackAPI : ''

export function postSlackInvite(invite) {
  /* istanbul ignore next */
  return axios.post(`${HOST}/api/invite`, invite).catch((err) => err.response)
}

export default postSlackInvite
