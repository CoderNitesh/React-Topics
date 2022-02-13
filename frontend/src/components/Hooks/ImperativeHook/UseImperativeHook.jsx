import React,{useRef} from 'react'
import Button from './button'

export default function UseImperativeHook() {
    const buttonRef = useRef(null);

    return (
        <div className='container'>
            <h3>UseImperativeHandle</h3>
            <button className='btn btn-primary mx-4' onClick={() => buttonRef.current.alterToggel()}>This is Parent</button>
            <Button ref={buttonRef}/>
        </div> 
    )
}
