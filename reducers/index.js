import { combineReducers } from 'redux'

import navigation from './navigation'
// borrar despues
import example from './example'

const reducer = combineReducers({
  navigation,
  example
})

export default reducer