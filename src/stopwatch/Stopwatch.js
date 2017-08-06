import React from 'react'
import {
    Image,
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native'

class Stopwatch extends React.Component {

    constructor() {
        super()
        this.state = {
            time: 0,
            isTimerActive: false,
            intervalId: 0
        }
    }

    componentWillUnmount() {
        console.log("Component will unmount")
        console.log(this.state.intervalId)
        clearInterval(this.state.intervalId)
    }

    startStopWatch = () => {
        this.setState({
            isTimerActive: true,
            intervalId: setInterval(
                () => {
                    const next = this.state.time + 1
                    this.setState({
                        time: next
                    })

                    if (!this.state.isTimerActive) {
                        clearInterval(interval)
                    }
                })
        })
    }

    pauseStopWatch = () => {
        this.setState({
            isTimerActive: false
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.countWrapper}>
                    <Text style={styles.counter}>
                        {this.state.time}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableHighlight
                        onPress={this.startStopWatch}
                        style={[styles.centerChild, styles.playButton]}>
                        <Text style={styles.buttonText}>
                            Play
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.pauseStopWatch}
                        style={[styles.centerChild, styles.pausButton]}>
                        <Text style={styles.buttonText}>
                            Pause
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    countWrapper: {
        backgroundColor: '#ec407a',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counter: {
        padding: 22,
        color: '#fff',
        fontSize: 32
    },
    centerChild: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    playButton: {
        flex: 1,
        backgroundColor: '#ffc107'
    },
    pausButton: {
        flex: 1,
        backgroundColor: '#ff5722'
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        padding: 12
    }
})

export default Stopwatch