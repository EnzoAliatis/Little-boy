import { combineReducers } from 'redux'

import navigation from './navigation'

import materias from './materias'

import diaSemana from './diaSemana'


const reducer = combineReducers({
  navigation,
  materias,
  diaSemana
})

export default reducer