import React,{useContext} from 'react'
import CounterContext from '../context/CounterContext'

function Home() {
    // console.log(useContext(CounterContext));
    const {count, increaseCount, setCount} = useContext(CounterContext)

    return (
        <div className='container'>
            <h1 className='my-3'>Home Component Function Based</h1>
            <h4>Count: {count}</h4>
            <button 
                type='button' 
                className='btn btn-primary' 
                onClick={() => increaseCount()}
            >
                Increase
            </button>
            
            <button 
                type='button' 
                className='btn btn-primary mx-2' 
                disabled={count<=0} 
                onClick={() => setCount(count - 1)}
            >
                Decrease
            </button>
        </div>
    )
}

export default Home
