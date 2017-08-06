import React from 'react'
import { StackNavigator } from 'react-navigation';
import Main from './src/main'
import Stopwatch from './src/stopwatch'

const App = StackNavigator({
  Main: { screen: Main },
  Stopwatch: { screen: Stopwatch }
}, {
    headerMode: 'none'
  })

console.log(App)

export default () => <App />


