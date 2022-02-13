import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, BUY_CAKE} from '../constants'
import axios from 'axios'

export const userRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchResponceSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchResponceFailed = (errormsg) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: errormsg
    }
}

export const fetchUser = () => {
    return function(dispatch){
        dispatch(userRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(responce => {
                const users = responce.data.map(user => user.id)
                dispatch(fetchResponceSuccess(users))
            })
            .catch(error => {
                dispatch(fetchResponceFailed(error.message))
            })
    }
}


export const buyCake = (amount = 1) => {
    return {
        type: BUY_CAKE,
        payload: amount
    }
}