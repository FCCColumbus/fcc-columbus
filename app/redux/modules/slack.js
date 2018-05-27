import { fromJS } from 'immutable'
import { postSlackInvite } from 'helpers/api'
import { SlackStore } from 'stores'
import isEmail from 'validator/lib/isEmail'

const POSTING_SLACK_INVITE = 'POSTING_SLACK_INVITE'
const POSTING_SLACK_ERROR = 'POSTING_SLACK_ERROR'
const POSTING_SLACK_SUCCESS = 'POSTING_SLACK_SUCCESS'
const UPDATE_SLACK_FIELDS = 'UPDATE_SLACK_FIELDS'
const VALIDATE_SLACK_FIELDS = 'VALIDATE_SLACK_FIELDS'

const validateFields = () => ({
  type: VALIDATE_SLACK_FIELDS,
})

export const updateFields = ({ name, value }) => ({
  type: UPDATE_SLACK_FIELDS,
  name,
  value,
})

const postingSlackInvite = () => ({
  type: POSTING_SLACK_INVITE,
})

const postingSlackError = (error) => ({
  type: POSTING_SLACK_ERROR,
  error,
})

const postingSlackSuccess = () => ({
  type: POSTING_SLACK_SUCCESS,
})

export const postInvite = () => async (dispatch, getState) => {
  const fields = getState().slack.get('fields')

  dispatch(validateFields())

  const error = getState().slack.get('error')

  dispatch(postingSlackInvite())

  const res = !error
    ? await postSlackInvite({
        first_name: fields.get('name'),
        email: fields.get('email'),
      })
    : { error }

  if (res.status !== 500 && res.status) {
    dispatch(postingSlackSuccess())
  } else {
    return res.data
      ? dispatch(postingSlackError(SlackStore[res.data.error]))
      : dispatch(postingSlackError(SlackStore[error]))
  }
}

const initialState = fromJS({
  success: false,
  message: 'Awaiting input...',
  error: '',
  isFetching: false,
  fields: {
    name: '',
    email: '',
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
        message: action.error,
      })
    case POSTING_SLACK_SUCCESS:
      return state.merge({
        isFetching: false,
        success: true,
        message: 'Request for invite was successful! Please check your email to confirm!',
      })
    case UPDATE_SLACK_FIELDS:
      return state.merge({
        fields: state.get('fields').set(action.name, action.value),
      })
    case VALIDATE_SLACK_FIELDS:
      if (!isEmail(state.get('fields').get('email'))) {
        return state.merge({
          error: 'invalid_email',
        })
      }

      if (!state.get('fields').get('name')) {
        return state.merge({
          error: 'empty_name',
        })
      }

      return state.merge({ error: '', message: '' })
    default:
      return state
  }
}

export default slack
