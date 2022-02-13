// import combineReducers 
import {combineReducers} from 'redux'

// All reducers import here might be more than one as we discussed
import {cardReducers} from "./reducer";


export default combineReducers({
    cardReducers,
    // userReducers
    // etc....
})