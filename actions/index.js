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

const fetchInfoUser = () => async dispatch => {
  dispatch(requestInfoUser)
  let data
  fetch({
    query: '{ studentsAll { id fullname }}'
  }).then(res => {
    console.log(res.data)
    data = res.data
  })
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
