import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Counter from './Counter'
import * as actions from './CounterAction'

const App = props => {
    return (
        <Counter {...props} />
    )
}

const mapStateToProps = state => {
    const { count } = state.default
    return {
        count: count
    }
}

const mapDistpachToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDistpachToProps)(App)