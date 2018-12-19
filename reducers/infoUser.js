
import { RECIVE_USER, REQUEST_USER, FAIL_USER, LOG_OUT } from '../constant'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  data: {}
}

const infoUser = (state = initialState, action) => {
  switch (action.type) {
    case FAIL_USER:
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: false
      })
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.payload
      })
    case LOG_OUT:
      return initialState
    default:
      return state
  }
}

// TODO: ARREGLAR ESTO
export const getMateria = (state, idMateria) => {
  let filtered = state.infoUser.data.subjects.filter(item => item.id === idMateria)
  return filtered[0]
}

export const getMateriaByDay = (materias, day) => {
  let filtered = materias.filter(item => item.days.includes(day))
  let sorted = filtered.sort((a, b) => {
    if (a.hours[0] > b.hours[0]) {
      return 1
    }
    if (a.hours[0] < b.hours[0]) {
      return -1
    }
    return 0
  })

  return sorted
}

export default infoUser
