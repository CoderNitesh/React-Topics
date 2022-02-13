import React,{useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchUser} from '../action/index'

function Home(props) {
    useEffect(() => {
        props.handleFetch()
        // eslint-disable-next-line
    }, [])
    // console.log('Home', props)
    return (
        <div>
            home here...!
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFetch: () => {dispatch(fetchUser())}
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
