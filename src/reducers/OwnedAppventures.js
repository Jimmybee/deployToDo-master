const ownedAppventures = (state = {}, action) => {
  switch (action.type) {
    case 'RECIEVED_OWNED_APPVENTURES':
      return state = action.appventures
    default:
      return state
  }
}

export default ownedAppventures