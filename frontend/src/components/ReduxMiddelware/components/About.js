import React, { useState } from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../action'

const About = (props) => {
    const [amount, setAmount] = useState();
    // console.log('About', props)
    return (
        <div className='buy-cake-div'>
            <h2>Number of Cake: {props.numOfCakes}</h2>
            {
                props.numOfCakes <= 0? <h1>Cakes are not available</h1>: <input className='buy-cake-input' type='text' value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder='Enter Amount of Cake to buy' />
            }
            
            <button className='buy-cake-button' disabled={!props.numOfCakes} onClick={()=> props.handleBuyCake(amount)}>Buy Cake</button> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.cakeshop
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleBuyCake: (amount) => {dispatch(buyCake(amount))}
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
