import React from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './src/main';
import Stopwatch from './src/stopwatch';
import Counter from './src/counter';
import GifSearch from './src/gifsearch';
import InstagramScreen from './src/instagramnav/InstagramScreen';

const App = StackNavigator(
  {
    Main: { screen: Main },
    Stopwatch: { screen: Stopwatch },
    Counter: { screen: Counter },
    GifSearch: { screen: GifSearch },
    InstagramNav: { screen: InstagramScreen }
  },
  {
    headerMode: 'none'
  }
);

console.log(App);

export default () => <App />;
