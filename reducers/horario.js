import { INCREMENT_DAY } from '../constant'

const initialState = {
  days:['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
  daySelected: 0
}

const days = (state = initialState.days, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const daySelected = (state = initialState.daySelected, action) => {
  switch (action.type) {
    case INCREMENT_DAY:
      return state + 1
    default:
      return state
  }
}


const horario = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        days: days(state.days, action),
        daySelected: daySelected(state.daySelected, action) 
      }
  }
}

export default horario