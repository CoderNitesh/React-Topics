import React, {useEffect, useRef, useLayoutEffect} from 'react'

export default function UseLayoutEffect() {
    const inputRef = useRef(null)

    // Execute before component render
    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    }, [])

    // Execute after component render
    useEffect(()=> {
        inputRef.current.value = 'shetye'
        console.log(inputRef.current.value)
    }, [])

    // render
    return (
        <div className="container">
            <h3>UseLayoutEffect</h3>
            <input type="text" value='nitesh' ref={inputRef}/>
        </div>
    )
}
