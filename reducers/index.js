import { combineReducers } from 'redux'

import navigation from './navigation'

import diaSemana from './diaSemana'

import infoUser from './infoUser'

const reducer = combineReducers({
  navigation,
  diaSemana,
  infoUser
})

export default reducer
