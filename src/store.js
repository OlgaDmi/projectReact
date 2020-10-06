import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { authMiddleware } from './authMiddleware'


const persistedState = localStorage.getItem('authStatus') ? JSON.parse(localStorage.getItem('authStatus')) : {}

export const store = createStore(rootReducer, persistedState, applyMiddleware(authMiddleware));


store.subscribe(() => {
  localStorage.setItem('authStatus', JSON.stringify(store.getState()))
  console.log("store changed", store.getState())
  console.log(localStorage)
  localStorage.clear()
})
