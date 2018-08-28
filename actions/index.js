import * as types from '../constant'


export const incrementDay = (idx) => ({
  type: types.INCREMENT_DAY,
  idx
})


export const decrementDay = (idx) => ({
  type: types.DECREMENT_DAY,
  idx
})

