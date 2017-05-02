
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger  from 'redux-logger'
import thunk from 'redux-thunk'

import appventures from '../reducers/Appventures'
import ownedAppventures from '../reducers/OwnedAppventures'
import editAppventure from '../reducers/EditAppventure'
import user from '../reducers/User'
import editStep from '../reducers/EditStep'
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
  appventures,
  editAppventure,
  ownedAppventures,
  editStep,
  user,
  form: formReducer,
})

const middleWare = applyMiddleware(thunk, logger())
const store = createStore(reducers, middleWare)

export default store

