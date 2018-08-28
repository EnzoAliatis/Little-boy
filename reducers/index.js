import { combineReducers } from 'redux'

import navigation from './navigation'

import materias from './materias'

import horario from './horario'


const reducer = combineReducers({
  navigation,
  materias,
  horario
})

export default reducer