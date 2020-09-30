import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { authMiddleware } from './authMiddleware'

// let store = createStore(rootReducer)

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));