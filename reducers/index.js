import { combineReducers } from 'redux'

import navigation from './navigation'

// import materias from './materias'

import diaSemana from './diaSemana'

import infoStudent from './infoStudent'

// import userLoading from './user-loading'

import infoUser from './infoUser'

const reducer = combineReducers({
  navigation,
  diaSemana,
  infoStudent,
  infoUser
})

export default reducer
