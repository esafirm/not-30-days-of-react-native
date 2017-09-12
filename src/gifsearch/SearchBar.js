import React from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'

class SearchBar extends React.Component {

    render() {
        console.log('SearchBar props', this.props)
        const { onTextChange } = this.props
        return (
            <View style={styles.searchBar}>
                <TextInput
                    placeholder={"Search here…"}
                    onChangeText={(text) => onTextChange(text)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidht: 10,
        height: 40,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        padding: 8
    }
})

export default SearchBar