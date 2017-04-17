
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
        location: appventure.location,
        description: appventure.description,
        duration: appventure.duration,
        themeOne: appventure.themeOne,
        themeTwo: appventure.themeTwo,
        startTime: appventure.startTime,
        endTime: appventure.endTime,
        imageUrl: appventure.imageUrl,
        steps: appventure.steps,
      });
    case 'ADD_NEW_STEP':
        const stepNumber = state.steps.length + 1;
        var step = {};
        step.stepNumber = stepNumber;
        const steps = state.steps.concat(step);
        return Object.assign({}, state, {
          steps: steps,
        });
    default:
      return state
  }
}
export const load = data => ({ type: 'SET_TITLE', data })

export default editAppventure