import React from 'react';
import { Provider } from 'react-redux';
import GifScreen from './GifScreen';
import store from '../store';

const GifApp = function GifApp(props) {
  return (
    <Provider store={store}>
      <GifScreen />
    </Provider>
  );
};

export default GifApp;
