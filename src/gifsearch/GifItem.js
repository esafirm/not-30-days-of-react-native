import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

class GifItem extends React.Component {
    render() {
        const { url } = this.props.data
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{ uri: url }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 1,
    },
    image: {
        width: 100,
        height: 100
    }
})

export default GifItem