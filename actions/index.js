import { createApolloFetch } from 'apollo-fetch'

import * as types from '../constant'

const fetch = createApolloFetch({
  uri: 'https://fatman-server.herokuapp.com/graphql'
})
const graphqlQuery = '{studentById(id: "5be0b91f9ae31f8a01148b93") { fullName, career, cedula, faculty, email, phone, level, itinerary, registrationNumber, typeStudent, vPaid, vGenered, subjects {id name classroom parallel teacherName teacherEmail faults scoreParcials formation days hours}}}'

export const incrementDay = (idx) => ({
  type: types.INCREMENT_DAY,
  idx
})

export const decrementDay = (idx) => ({
  type: types.DECREMENT_DAY,
  idx
})

// INFO_USER_ACTIONS
export const requestInfoUser = () => ({
  type: types.REQUEST_INFO_USER
})

const reciveInfoUser = infoUser => ({
  type: types.RECIVE_INFO_USER,
  infoUser
})

const failInfoUser = () => ({
  type: types.FAIL_INFO_USER
})

export const fetchInfoUser = () => async dispatch => {
  dispatch(requestInfoUser())
  let data
  try {
    data = await fetch({ query: graphqlQuery })
  } catch (err) {
    console.log('Soy el error')
    dispatch(failInfoUser())
  }
  // Aqui validar si la data es vacia o no
  dispatch(reciveInfoUser(data))
}

const shouldFetchInfoUser = (state) => {
  const id = state.infoUser.data.id
  if (!id) {
    return true
  } else if (state.infoUser.status.isFetching) {
    return false
  } else {
    console.log('InfoUser fetched :)')
  }
}

export const fetchInfoUserIfNeeded = (infoUser) => {
  return (dispatch, getState) => {
    if (shouldFetchInfoUser(getState(), infoUser)) {
      return dispatch(fetchInfoUser())
    }
  }
}

export const logOut = () => ({
  type: types.LOG_OUT
})

// INFO_USER_ACTIONS
