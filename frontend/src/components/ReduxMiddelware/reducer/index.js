import {combineReducers} from 'redux'

// Reducers
import { fetchUserReducer } from './fetchUserReducer'
import { cakeShopReducer } from './cakeShopReducer'

// created one reducer
export const rootReducer = combineReducers({
    fetchuser: fetchUserReducer,
    cakeshop: cakeShopReducer
})