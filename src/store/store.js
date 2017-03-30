
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger  from 'redux-logger'
import thunk from 'redux-thunk'

import appventures from '../reducers/Appventures'
import editAppventure from '../reducers/EditAppventure'
import user from '../reducers/User'


const reducers = combineReducers({
  appventures,
  editAppventure,
  user,
})

const middleWare = applyMiddleware(thunk, logger())
const store = createStore(reducers, middleWare)

export default store

