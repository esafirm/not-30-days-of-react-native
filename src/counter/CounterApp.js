import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Counter from './Counter'
import * as actions from './CounterAction'

const App = props => {
    console.log(props)
    console.log('store:', props.store)
    return (
        <Counter {...props} />
    )
}

const mapStateToProps = state => {
    const { count } = state.counterReducer
    return {
        count: count
    }
}

const mapDistpachToProps = (dispatch, getState) => {
    console.log('getState', getState)
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDistpachToProps)(App)