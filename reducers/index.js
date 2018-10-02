import { combineReducers } from 'redux'

import navigation from './navigation'

import materias from './materias'

import diaSemana from './diaSemana'

import infoStudent from './infoStudent'

import userLoading from './user-loading'


const reducer = combineReducers({
  navigation,
  materias,
  diaSemana,
  infoStudent,
  userLoading
})

export default reducer