import React,{useState} from 'react'

const About = () => {
    const [error, setError] = useState(false)
  
    setTimeout(()=>{
        setError(true)
    }, 3000)

    return (
        <div className='container'>
            <h1 className='h1 my-2'>
                {
                    !error? 'ErrorBoundary About page': new Error('Error Occured')
                }
            </h1>
        </div>
        
    )
}

export default About
