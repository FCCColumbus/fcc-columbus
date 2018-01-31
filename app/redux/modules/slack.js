import { fromJS } from 'immutable'
// import { postSlackInvite } from 'helpers/api'

const POSTING_SLACK_INVITE = 'POSTING_SLACK_INVITE'
const POSTING_SLACK_ERROR = 'POSTING_SLACK_ERROR'
const POSTING_SLACK_SUCCESS = 'POSTING_SLACK_SUCCESS'
const POSTING_SLACK_PLACEHOLDER = 'POSTING_SLACK_PLACEHOLDER' 

// const postingSlackInvite = () => ({
//   type: POSTING_SLACK_INVITE,
// })

// const postingSlackError = (err) => ({
//   type: POSTING_SLACK_ERROR,
//   error: err,
// })

// const postingSlackSuccess = (data) => ({
//   type: POSTING_SLACK_SUCCESS,
//   events: data,
// })

export const postAndHandleEvents = () => (
  // (dispatch) => {
  //   dispatch(postingSlackInvite())
  //   postSlackInvite()
  //     .then((res) => dispatch(postingSlackSuccess(res)))
  //     .catch((err) => dispatch(postingSlackError(err)))
  // }
  { type: POSTING_SLACK_PLACEHOLDER }
)

const initialState = fromJS({
  success: false,
  error: '',
  isFetching: false,
  data: {
    email: '',
    firstName: '',
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
    case POSTING_SLACK_PLACEHOLDER:
      // console.log('Request sent off to API')
      return state
    default:
      return state
  }
}

export default slack