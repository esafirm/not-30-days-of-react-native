import React from 'react';
import { ListView } from 'react-native';
import GifItem from './GifItem';

class GifList extends React.Component {
  constructor(props) {
    super(props);

    const gifs = [
      {
        id: 1,
        url: 'http://fakeimg.pl/300/'
      },
      {
        id: 2,
        url: 'http://fakeimg.pl/300/'
      },
      {
        id: 3,
        url: 'http://fakeimg.pl/300/'
      },
      {
        id: 4,
        url: 'http://fakeimg.pl/300/'
      },
      {
        id: 5,
        url: 'http://fakeimg.pl/300/'
      }
    ];

    const dataSouce = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      ds: dataSouce.cloneWithRows(gifs)
    };
  }

  renderItem(data) {
    return <GifItem data={data} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.state.ds}
        renderRow={data => {
          return this.renderItem(data);
        }}
      />
    );
  }
}

export default GifList;
