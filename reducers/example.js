const example = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EXAMPLE_NAME':
      return {...state, exampleName: action.payload.name}

    default:
      return state
  }
}

export default example