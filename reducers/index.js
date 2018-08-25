import { combineReducers } from 'redux'

import navigation from './navigation'

import materias from './materias'
// borrar despues
import example from './example'

const reducer = combineReducers({
  navigation,
  materias,
  example
})

export default reducer