import { createApolloFetch } from 'apollo-fetch'

import * as types from '../constant'

// TODO: Poner la uri dotenv
const fetch = createApolloFetch({
  uri: 'http://localhost:3000/graphql'
})

export const incrementDay = (idx) => ({
  type: types.INCREMENT_DAY,
  idx
})

export const decrementDay = (idx) => ({
  type: types.DECREMENT_DAY,
  idx
})

// INFO_USER_ACTIONS
const failUser = () => ({
  type: types.FAIL_USER
})

const requestUser = () => ({
  type: types.REQUEST_USER
})

const reciveUser = (user) => ({
  type: types.RECIVE_USER,
  payload: user
})

const fetchUser = (cedula, password) => async dispatch => {
  console.log(cedula)
  console.log(password)
  // Le digo a redux que voy a epezar con la peticion
  await dispatch(requestUser())
  // Empiezo hacer el request
  let q
  try {
    q = await fetch({ query: `{studentByCedulaPass(cedula:"1310729511", password:"enzoenzo") { fullName, career, cedula, faculty, email, phone, level, itinerary, registrationNumber, typeStudent, vPaid, vGenered, subjects {id name classroom parallel teacherName teacherEmail faults scoreParcials formation days hours}}}` })
  } catch (error) {
    console.log('Error al localizar con el servidor')
    return dispatch(failUser())
  }

  // Aqui validar si el query esta correcto
  if (q.data.studentByCedulaPass === null) {
    return dispatch(failUser())
  }

  // Devolver el q si ha sido exitodo
  return dispatch(reciveUser(q.data.studentByCedulaPass))
}

const shouldFetchUser = (state) => {
  const infoUser = state.infoUser
  if (Object.keys(infoUser.data).length === 0) {
    return true
  } else if (infoUser.isFetching) {
    return false
  } else {
    return infoUser.didInvalidate
  }
}

export const fetchUserIfNeeded = (cedula, password) => {
  return (dispatch, getState) => {
    if (shouldFetchUser(getState())) {
      return dispatch(fetchUser(cedula, password))
    }
  }
}

export const logOut = () => ({
  type: types.LOG_OUT
})
// INFO_USER_ACTIONS
