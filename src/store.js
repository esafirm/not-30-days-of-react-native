import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducers from './reducers'

export default createStore(
    rootReducers,
    applyMiddleware(logger)
)