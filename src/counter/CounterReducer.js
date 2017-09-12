import * as types from './CounterActionTypes'

const initialState = {
    count: 0
}

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                count: state.count + 1
            }
        case types.DECREMENT:
            return {
                count: state.count == 0
                    ? 0
                    : state.count - 1
            }
        default:
            return state
    }
}

