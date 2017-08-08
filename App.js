import React from 'react'
import { StackNavigator } from 'react-navigation';

import Main from './src/main'
import Stopwatch from './src/stopwatch'
import Counter from './src/counter'

const App = StackNavigator({
  Main: { screen: Main },
  Stopwatch: { screen: Stopwatch },
  Counter: { screen: Counter }
}, {
    headerMode: 'none'
  })

console.log(App)

export default () => <App />


