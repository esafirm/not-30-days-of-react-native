import React from 'react'
import { Provider } from 'react-redux'
import CounterApp from './CounterApp'
import store from '../store'

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


