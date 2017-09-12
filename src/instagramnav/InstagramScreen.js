import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DummyScreen from './DummyScreen';

const Button = ({ text, action }) => (
  <TouchableOpacity
    onPress={action}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  >
    <Text>{text}</Text>
  </TouchableOpacity>
);

const BottomBar = ({ action }) => (
  <View
    style={{ flexDirection: 'row', backgroundColor: '#fbc02d', height: 56 }}
  >
    <Button text={'TAB 1'} action={() => action(0)} />
    <Button text={'TAB 2'} action={() => action(1)} />
    <Button text={'TAB 3'} action={() => action(2)} />
  </View>
);

const Nav = props => {
  const Navigator = StackNavigator(
    {
      Main: { screen: DummyScreen }
    },
    {
      headerMode: 'none'
    }
  );
  return <Navigator screenProps={props} />;
};

const Nav1 = Nav({ screen: '1', color: '#c62828' });
const Nav2 = Nav({ screen: '2', color: '#536dfe' });
const Nav3 = Nav({ screen: '3', color: '#e91e63' });

class InstagramScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: 0
    };
  }

  getNav() {
    const { currentNav } = this.state;
    switch (currentNav) {
      case 0:
        return Nav1;
      case 1:
        return Nav2;
      default:
        return Nav3;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.getNav()}
        <BottomBar action={num => this.setState({ currentNav: num })} />
      </View>
    );
  }
}
export default InstagramScreen;
