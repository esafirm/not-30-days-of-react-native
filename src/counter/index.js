import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import * as reducers from './CounterReducer'
import CounterApp from './CounterApp'

const store = createStore(combineReducers(reducers))

class CounterAppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        )
    }
}

export default CounterAppWrapper


