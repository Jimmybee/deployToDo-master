
const initialState = { title: " " };

const editAppventure = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOADED_IMAGE':
      return state = action.payload.url
    case 'SET_TITLE':
      return Object.assign({}, state, {
        title: action.title,
      });
    case 'SET_LOCATION_NAME':
      return Object.assign({}, state, {
        locationName: action.locationName,
      });
    default:
      return state
  }
}

export default editAppventure