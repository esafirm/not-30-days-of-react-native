import React from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';

import SearchBar from './SearchBar';
import GifList from './GifList';
import { connect } from 'react-redux';
import * as actions from './GifAction';

const GifScreen = props => {
  const { search } = props;
  console.log('GifScreen Props:', props);
  return (
    <View style={styles.bg}>
      <SearchBar onTextChange={search} />
      <View style={styles.list}>
        <GifList style={styles.list} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ec407a',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 24 : 0
  },
  list: {
    marginTop: 12,
    flex: 1
  }
});

const mapStateToProps = state => {
  console.log('GifScreen State', state);
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    search: text => {
      console.log(`searching for ${text}`);
      dispatch(actions.search(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GifScreen);
