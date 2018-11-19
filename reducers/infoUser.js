import { combineReducers } from 'redux'

import { REQUEST_INFO_USER, RECIVE_INFO_USER, FAIL_INFO_USER } from '../constant'

const data = (state = {}, action) => {
  switch (action.type) {
    case RECIVE_INFO_USER:
      return {
        ...state,
        ...action.infoUser.data
      }
    default:
      return state
  }
}

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
    case FAIL_INFO_USER:
      return { ...state, didInvalid: true }

    default:
      return state
  }
}

export const getMateria = (state, idMateria) => {
  let filtered = state.infoUser.data.studentById.subjects.filter(item => item.id === idMateria)
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

export default combineReducers({
  data,
  status
})
