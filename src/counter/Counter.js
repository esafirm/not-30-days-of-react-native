import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const Counter = props => {
    const { count, actions } = props
    const { increment, decrement } = actions

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.counter}>{count}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button} onPress={increment}>
                    <Text>INCREMENT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={decrement}>
                    <Text>DECREMENT</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ec407a'
    },
    counter: {
        fontSize: 28,
        color: '#fff'
    },
    button: {
        flex: 1,
        backgroundColor: '#ffc107',
        padding: 12,
        alignItems: 'center'
    }
})

export default Counter