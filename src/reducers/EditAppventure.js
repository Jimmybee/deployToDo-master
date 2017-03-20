




const editAppventure = (state = {}, action) => {
  switch (action.type) {
    case 'UPLOADED_IMAGE':
      return state = action.payload.url
    default:
      return state
  }
}

export default editAppventure