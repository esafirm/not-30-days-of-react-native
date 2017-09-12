import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DummyScreen = ({ screenProps, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      console.log('nav', navigation);
      navigation.navigate(
        'Main',
        navigation.state.params
          ? navigation.state.params * 2
          : screenProps.screen * 2
      );
    }}
    style={{
      backgroundColor: screenProps.color,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text style={{ fontSize: 28, color: '#FFF' }}>
      {navigation.state.params ? navigation.state.params : screenProps.screen}
    </Text>
  </TouchableOpacity>
);

export default DummyScreen;
