Nitesh shetye

@   Folder structure

->  components
        --> All Components
->  containers
        --> All containers 
->  services
        --> Actions
        --> Reducers
        --> Constants.js




******************************************************STEPS******************************************************

******How_Components_Display_Start******

STEP_1:- Home component (Create component)
<!-- Import Home component to Home Container -->
STEP_2:- Home Container (Some operation happens on component) 
<!-- Import Home Container to App Component -->
STEP_3:- App Component (Display containers)

******How_Components_Display_Ends******


******Actions_Start******
<!-- Action send date to Store from react -->
STEP_1:- Create Function addToCart 
<!-- addToCart function return an object {type: 'Action Type', data: 'Send required data to perform in reducers'} -->
<!-- Examples....! Below-->
export const Action_type_1 = data => ({
    type: Action_type_1,
    payload: {
        data
    }
})
export const Action_type_2 = data => ({
    type: Action_type_2,
    payload: {
        id
    }
})
******Actions_Ends******


******Reducers_Function_Start******
<!-- Reducer Function take 2 parameter -->
<!-- 1st Parameter state -->
<!-- 2nd Parameter action -->
<!-- Inside the Reducer Function -->
<!-- There is Switch Case to choose the action.type and according this decide what to do -->
<!-- Examples....! Below-->
<!-- 
one reducer
export const reducerFunctionName = (state = [], action) => {
    switch (action.type) {
        case Action_type_1:
            return {
                ...state,
                cardData: action.payload.data
            }  
        case Action_type_2:
            return {
                ...state,
                id: action.payload.id
            } 
        .
        .
        .
        default:
            return state
    }
} 
-->
<!-- There might be more than one reducers but store only one -->
<!-- So we create one rootReducers and combine all reducers in one place -->
<!-- Examples....! Below -->
<!--
All reducer combine here (rootReducer) 

import {combineReducers} from 'redux'

import {cardReducers} from "./reducer";

export default combineReducers({
    cardReducers,
    userReducers,
    etc....
}) 
-->
<!-- And import it in store -->
******Reducers_Function_Ends******


******Container_Start******
<!-- Container use to connect the react and redux -->
<!-- We have HomeContainer and NavBarContainer -->
<!-- Import some imp files in Container -->
1. component (one or more)
2. actions (actions which required in that component)
3. connect (from 'react-redux' to connect all this)

<!-- What inside of Container ? -->
<!-- Redux library -->
import { connect } from "react-redux";

<!-- components -->
import component from "../components/component";

<!-- actions -->
import {action} from '../services/actions/action'

<!-- which help to get the state from the store  -->
const mapStateToProps = state => ({
    
})

<!-- which help to dispatch the action (to store the state) -->
const mapDispatchToProps = dispatch => ({
    handler: data => dispatch(action(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
******Container_Ends******

******************************************************STEPS******************************************************


