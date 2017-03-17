
const appventures = (state = {}, action) => {
  switch (action.type) {
    case 'RECIEVED_ALL_APPVENTURES':
      return state = action.appventures
    default:
      return state
  }
}

export default appventures