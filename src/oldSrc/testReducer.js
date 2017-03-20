import { combineReducers } from 'redux'

const first = (state = 'Test', action) => {
  switch (action.type) {
    case 'CHANGE_IT':
      return state = action.payload
    default:
      return state
  }
}

const appventures = (state = {}, action) => {
  switch (action.type) {
    case 'RECIEVED_ALL_APPVENTURES':
      return state = action.appventures
    default:
      return state
  }
}

const reducers = combineReducers({
  first,
  appventures
})

export default reducers