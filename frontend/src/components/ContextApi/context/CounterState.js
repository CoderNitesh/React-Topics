import React, {useState} from 'react'
import CounterContext from './CounterContext';

const CounterState = (props) => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        // console.log('increasing the count')
        setCount(count + 1)
    }
    const decreaseCount = () => {
        // console.log('decreasing the count')
        setCount(count - 1)
    }

    return (
        <CounterContext.Provider value={{count, setCount,increaseCount, decreaseCount}}>
            {props.children }
        </CounterContext.Provider>
    )
}

export default CounterState;