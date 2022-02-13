/*
here implemented the middelware 
redux-logger and redux-thunk
logger is help to log the updated state any much more
redux-thunk help to create action which able to return the function
*/

const { createStore, applyMiddleware } = require("redux");

// ********************************** middelwere **********************************
const reduxLogger  = require('redux-logger')
const logger = reduxLogger.createLogger()

const axios = require('axios')
const thunkMiddelware = require('redux-thunk').default
// ********************************** middelwere **********************************

// ********************************** required things and constants **********************************
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// const users = [
//     {name: 'nitesh', age: 22},
//     {name: 'adit', age: 23},
//     {name: 'manish', age: 21},
//     {name: 'sumedh', age: 22},
// ]
// const errormsg = 'something went wrong'
// ********************************** required things and constants **********************************

// ********************************** ACITONS **********************************
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
        info: 'Request to server to fetch the user data'
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        info: 'succefully fetched',
        payload: users
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        info: 'Error occured',
        payload: error
    }
}
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(responce => {
                const users = responce.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
    }
}
// ********************************** ACITONS **********************************

// ********************************** REDUCERS **********************************
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
// ********************************** REDUCERS **********************************

// ********************************** STORE **********************************
const store = createStore(usersReducer, applyMiddleware(logger,thunkMiddelware))
const unsubscribe = store.subscribe(() => {})
// store.dispatch(fetchUsersRequest())
// store.dispatch(fetchUsersSuccess(users))
// store.dispatch(fetchUsersFailure(errormsg))
store.dispatch(fetchUsers())
unsubscribe()
// ********************************** STORE **********************************
