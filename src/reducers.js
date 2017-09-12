import counterReducer from './counter/CounterReducer'
import searchReducer from './gifsearch/GifAction'
import { combineReducers } from 'redux'

export default combineReducers({
    counterReducer,
    searchReducer
})