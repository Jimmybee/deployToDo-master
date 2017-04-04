
const initialState = { };

import { updateBackendlessAppventureDetails } from '../api/Backendless.js';

const editAppventure = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOADED_IMAGE':
      return Object.assign({}, state, {
        imageUrl: action.payload.url,
      });
    case 'UPDATE_APPVENTURE_DETAILS':
      const appventure = action.appventure
      return Object.assign({}, state, {
        title: appventure.title,
        locationName: action.appventure.locationName,
        description: appventure.description,
        duration: appventure.duration,
        theme: appventure.theme,
        startTime: appventure.startTime,
        endTime: appventure.endTime,
      });
    default:
      return state
  }
}
export const load = data => ({ type: 'SET_TITLE', data })

export default editAppventure