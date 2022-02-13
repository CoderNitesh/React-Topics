import { connect } from 'react-redux';

import NavBar from '../components/NavBar'

// which help to get the state from the store 
const mapStateToProps = state => {
    console.log('navbar contianer props', state)
    return {
        data: state.cardReducers
    }
}

// which help to dispatch the action (to store the state)
// const mapDispatchToProps = dispatch => ({
//     // We dont have any handler here. Just want state as props 
// })


export default connect(mapStateToProps, null)(NavBar)


