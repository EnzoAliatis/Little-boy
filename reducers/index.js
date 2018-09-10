import { combineReducers } from 'redux'

import navigation from './navigation'

import materias from './materias'

import diaSemana from './diaSemana'

import infoStudent from './infoStudent'


const reducer = combineReducers({
  navigation,
  materias,
  diaSemana,
  infoStudent
})

export default reducer