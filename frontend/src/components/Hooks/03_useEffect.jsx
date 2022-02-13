import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function UseEffectHook() {
    const [data, setData] = useState([])
    
    // utils
    const getData = async () =>{
        const responce = await axios.get("https://jsonplaceholder.typicode.com/comments")
        setData(responce.data[0].email)
    }

    // Every single time page reload 
    useEffect(()=>{
        getData()
        console.log('API IS CALLED')
    })
 
    // useEffect(()=>{
    //     getData()
    //     console.log('API IS CALLED only first time')
    // },[])
    
    // you can't write data here if you iterate over whole array beacause each time value will set
    // useEffect(()=>{
    //     getData()
    //     console.log('API IS CALLED')
    // },[data])
    
    // take this inside the div if iterate over the array 
    // {
    //     data.map(d => <div key={d.id}>Email is {d.email}</div>)
    // }
    return (
        <div>
            <h1>
                Email is: {data}
            </h1>
            
        </div>
    )
}
