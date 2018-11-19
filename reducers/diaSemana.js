import { INCREMENT_DAY, DECREMENT_DAY } from '../constant'

const initialState = 0

const diaSemana = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_DAY:
      if (action.idx === 4) {
        return initialState
      } else {
        return state + 1
      }

    case DECREMENT_DAY:
      if (action.idx === 0) {
        return state + 4
      } else {
        return state - 1
      }
    default:
      return state
  }
}

export default diaSemana
