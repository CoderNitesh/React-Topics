/*
Action takes neccessary data 

returns an Object which contained -> type and payload (data)  

*/

import { ADD_TO_CART, REMOVE_FROM_CART} from '../Constants'

export const addToCart = data => {
    return {
        type: ADD_TO_CART,
        payload: {
            data
        }
    }
}

export const removeFromCart = () => {
    return {
        type: REMOVE_FROM_CART,
    }
}
