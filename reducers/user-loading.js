// Esto se borra por que el usuario se lo pide en infoStudent

const userLoading = (state = false, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return { ...action.payload }
    }
    case 'REMOVE_USER': {
      return false
    }
    default:
      return state
  }
}

export default userLoading
