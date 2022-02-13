import {createStore, applyMiddleware} from 'redux'

// actions
import { rootReducer } from './reducer'

// middelware
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// creating store
export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

