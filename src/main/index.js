import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainList from './MainList'

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 180, alignItems: 'center', 'justifyContent': 'center', backgroundColor: '#ec407a' }}>
          <Text style={styles.header}>Not 30 Days of React Native</Text>
        </View>
        <MainList
          style={styles.list}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center'
  },
  list: {
    flex: 1
  }
});
