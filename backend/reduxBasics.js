/*
create actions
create initial state for passing in reducer
create reducers 
create rootreducer and combine all reducers in rootReducer
create store 
pass rootreducer as argument


Note: 
    1) store subscribe will run every time when state change
    2) state change when we dispatch the action
    3) subscribe return an unsubscribe which will remove listener
*/


// written when store created
const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

// ***************************************************** middelweare *****************************************************
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
// ***************************************************** middelweare *****************************************************


// ***************************************************** constants and required things *****************************************************
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

// const initialState = {
//     numberOfCakes: 10
// }
const initialCakeState = {
    numberOfCakes: 10
}
const initialIceCreamState = {
    numberOfIceCream: 20
}
// ***************************************************** constants and required things *****************************************************

// ***************************************************** Actions *****************************************************
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'buy cake action'
    }
}
const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM,
        info: 'buy ice-cream action'
    }
}
// ***************************************************** Actions *****************************************************


// ***************************************************** Reducers *****************************************************
// const cakeReducer = (state = initialState, aciton) => {
//     switch(aciton.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1
//             }

//         default:
//             return state
//     }
// }
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }

        default:
            return state
    }
}
const icecreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }

        default:
            return state
    }
}
// ***************************************************** Reducers *****************************************************

// ***************************************************** combine Reducers *****************************************************
const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: icecreamReducer
})
// ***************************************************** combine Reducers *****************************************************

// ***************************************************** Store *****************************************************
// const store = createStore(cakeReducer);
// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial State', store.getState());
console.log('***************************************************** Store *****************************************************')
// const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
const unsubscribe = store.subscribe(() => {}) // whenever the state change this will run

store.dispatch(buyCake())
store.dispatch(buyCake())
console.log('***************************************************** Store *****************************************************')
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// console.log('state after unsubscribe', store.getState())
// ***************************************************** Store *****************************************************
