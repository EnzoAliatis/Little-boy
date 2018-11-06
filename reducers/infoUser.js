
import { REQUEST_INFO_USER, RECIVE_INFO_USER } from '../constant'

const initialStatus = {
  didInvalid: false,
  isFetching: false,
  lastUpdated: null
}

const status = (state = initialStatus, action) => {
  switch (action.type) {
    case REQUEST_INFO_USER:
      return { ...state, isFetching: true }
    case RECIVE_INFO_USER:
      return { ...state, isFetching: false }

    default:
      return state
  }
}

export default status
