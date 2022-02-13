import React, {useState, forwardRef, useImperativeHandle} from 'react'

const Button = forwardRef((props, ref) => {
    const [toggel, setToggel] = useState(false)

    useImperativeHandle(ref, ()=>({
        alterToggel(){
            setToggel(!toggel)
        }
    }));

    return (
        <>
            <button className='btn btn-primary' onClick={() => setToggel(!toggel)}>
                This is child
            </button>
            <div className="container">
                {toggel && <h4 className="my-3">This is Toggel Value</h4> }
            </div>
        </>
    )

})

export default Button;