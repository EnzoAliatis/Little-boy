import { createApolloFetch } from 'apollo-fetch'

import * as types from '../constant'

const fetch = createApolloFetch({
  uri: 'https://fatman-server.herokuapp.com/graphql'
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
const requestInfoUser = () => ({
  type: types.REQUEST_INFO_USER
})

const reciveInfoUser = infoUser => ({
  type: types.RECIVE_INFO_USER,
  infoUser
})

export const fetchInfoUser = () => async dispatch => {
  dispatch(requestInfoUser)
  const data = await fetch({ query: '{studentById(id: "5be0b91f9ae31f8a01148b93") { fullName, id }}' })
  console.log(data)
  dispatch(reciveInfoUser(data))
}

const shouldFetchInfoUser = (state) => {
  const infoUser = state.infoUser.infoUser
  if (true) {
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
      return dispatch(fetchInfoUser)
    }
  }
}
// INFO_USER_ACTIONS
