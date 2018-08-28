import { INCREMENT_DAY } from '../constant'

const initialState = 0


const horario = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT_DAY':
      return state + 1
    default:
      return state
  }
}




export default horario