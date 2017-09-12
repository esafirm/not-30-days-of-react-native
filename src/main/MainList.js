import React from 'react';
import { FlatList, Button, StyleSheet } from 'react-native';

const rows = [
  {
    id: 0,
    image: '',
    text: 'Stopwatch',
    component: 'Stopwatch'
  },
  {
    id: 1,
    image: '',
    text: 'Slot Machine',
    component: 'Main'
  },
  {
    id: 2,
    image: '',
    text: 'Counter with Redux',
    component: 'Counter'
  },
  {
    id: 3,
    image: '',
    text: 'Gif Search',
    component: 'GifSearch'
  },
  {
    id: 4,
    image: '',
    text: 'Instagram Nav',
    component: 'InstagramNav'
  }
];

class MainList extends React.Component {
  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => {
    return (
      <Button
        style={styles.item}
        title={item.text}
        onPress={() => this.navigatTo(item.component)}
      />
    );
  };

  navigatTo(destination) {
    this.props.navigation.navigate(destination);
  }

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 14,
    height: 40,
    backgroundColor: '#fff',
    flex: 1
  }
});

export default MainList;
