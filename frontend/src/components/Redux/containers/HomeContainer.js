// Redux library
import { connect } from "react-redux";

// components
import Home from "../components/Home";

// actions
import {addToCart, removeFromCart} from '../services/actions'


// which help to get the state from the store 
const mapStateToProps = state => {
    console.log('home contianer props', state.cardReducers)
    return {
        data: state.cardReducers
    }
}

// which help to dispatch the action (to store the state)
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: () => dispatch(removeFromCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
