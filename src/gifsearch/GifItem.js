import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const size = Dimensions.get('window').width / 3 - 16;

class GifItem extends React.Component {
  render() {
    const { url } = this.props.data;
    return (
      <View style={[this.props.style, styles.item]}>
        <Image style={styles.image} source={{ uri: url }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 1
  },
  image: {
    width: size,
    height: size
  }
});

export default GifItem;
