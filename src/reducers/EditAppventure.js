
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
        objectId: appventure.objectId,
        title: appventure.title,
        startingLocationName: action.appventure.startingLocationName,
        description: appventure.description,
        duration: appventure.duration,
        themeOne: appventure.themeOne,
        themeTwo: appventure.themeTwo,
        startTime: appventure.startTime,
        endTime: appventure.endTime,
      });
    default:
      return state
  }
}
export const load = data => ({ type: 'SET_TITLE', data })

export default editAppventure