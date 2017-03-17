
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger  from 'redux-logger'
import thunk from 'redux-thunk'

import appventures from '../reducers/Appventures'

const reducers = combineReducers({
  appventures
})

const middleWare = applyMiddleware(thunk, logger())
const store = createStore(reducers, middleWare)

export default store

