import React,{useReducer} from 'react'


// reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1, text: state.text}
        case 'CHANGE_TEXT':
            return {counter: state.counter, text: !state.text}
        default:
            return state;
    }
}  


export default function UseReducerHook() {

    // useReducer 
    const [state, dispatch] = useReducer(reducer, {counter: 0, text: true})
    
    return (
        <div className='container my-3'>
            <h1>Reducer</h1>
            <div>
                <h2 className='heading'>
                    {state.counter}
                </h2>
                <button className='btn btn-primary' onClick={() => {dispatch({type: 'INCREMENT'}); dispatch({type: 'CHANGE_TEXT'})}}>Increment</button>
            </div>
            <div className="form-container my-5">
                {state.text && <h1>This is toggle text</h1>}
            </div>
        </div>
    )
}
