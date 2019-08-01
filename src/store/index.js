import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const configureStore = () => {
  let store

  if (process.env.NODE_ENV === 'production') {
    store = createStore(rootReducer, applyMiddleware(thunk))
  } else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  }

  return store
}

export default configureStore()
