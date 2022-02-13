import React,{useState, useEffect} from 'react'

const counterState = () => {
    console.log('counter state set: ');
    return 0
}
const textState = () => {
    console.log('text state set: ');
    return ''
}

export default function UseStateHook() {
    const [counter, setCounter] = useState(() => counterState())
    const [text, setText] = useState(() => textState())

    const incrementCounter = () => {
        setCounter((prevCounter) => {
            // console.log("prevCounter: ", prevCounter)
            return prevCounter + 1
        })
        // setCounter((currCounter) => {
        //     console.log("currCounter: ", currCounter)

        //     return currCounter + 1
        // })
    }

    const decrementCounter = () =>{
        setCounter(counter-1)
    }

    useEffect(() => {
        console.log("counter: ", counter);
    }, [counter])

    useEffect(() => {
        console.log("text: ", text);
        return () => {
            console.log('unmounte text: ', text);
            setText((prevText) => {
                return prevText
            });
        }
    }, [text])

    const handleChange = (e) =>{
        const inputText  = e.target.value
        setText((prevText) => {
            // console.log('prevText: ', prevText);
            return inputText
        });
    }
    return (
        <div className='container my-3'>
            <div>
                <h2 className='heading'>
                    {counter}
                </h2>
                <button className='btn btn-primary' onClick={incrementCounter}>Increment</button>
                <button className='btn btn-primary mx-3' disabled={counter<=0} onClick={decrementCounter}>Decrement</button>            
            </div>
            <div className="form-container my-5">
                <input type="text" className="form-input mx-5" onChange={handleChange} placeholder='Enter Something here...!'/>
                {text}
            </div>
        </div>
    )
}
