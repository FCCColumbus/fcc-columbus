import { fromJS } from "immutable"
import { postSlackInvite } from "helpers/api"

const POSTING_SLACK_INVITE = "POSTING_SLACK_INVITE"
const POSTING_SLACK_ERROR = "POSTING_SLACK_ERROR"
const POSTING_SLACK_SUCCESS = "POSTING_SLACK_SUCCESS"
const UPDATE_SLACK_FIELDS = "UPDATE_SLACK_FIELDS"

export const updateFields = ({ name, value }) => ({
  type: UPDATE_SLACK_FIELDS,
  name,
  value,
})

const postingSlackInvite = () => ({
  type: POSTING_SLACK_INVITE,
})

const postingSlackError = error => ({
  type: POSTING_SLACK_ERROR,
  error,
})

const postingSlackSuccess = data => ({
  type: POSTING_SLACK_SUCCESS,
  events: data,
})

export const postInvite = () => async (dispatch, getState) => {
  const fields = getState().slack.get("fields")

  dispatch(postingSlackInvite())

  const res = await postSlackInvite({
    first_name: fields.get("name"),
    email: fields.get("email"),
  })

  if (res === {}) {
    dispatch(postingSlackSuccess())
  } else {
    dispatch(postingSlackError("Failed Submission"))
  }
}

const initialState = fromJS({
  success: false,
  error: "",
  isFetching: false,
  fields: {
    name: "",
    email: "",
  },
})

const slack = (state = initialState, action) => {
  switch (action.type) {
    case POSTING_SLACK_INVITE:
      return state.merge({
        isFetching: true,
      })
    case POSTING_SLACK_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error,
      })
    case POSTING_SLACK_SUCCESS:
      return state.merge({
        isFetching: false,
        success: true,
      })
    case UPDATE_SLACK_FIELDS:
      return state.merge({
        fields: state.get("fields").set(action.name, action.value),
      })
    default:
      return state
  }
}

export default slack
