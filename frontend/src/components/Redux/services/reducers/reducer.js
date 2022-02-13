import { ADD_TO_CART, REMOVE_FROM_CART } from '../Constants'


export const cardReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                {
                    cartData: action.payload.data    
                }
            ]
        
        case REMOVE_FROM_CART:
            state.pop()
            return [
                ...state,
            ]
        
        
        default:
            return state
    }
}
