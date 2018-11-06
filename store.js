import {
  createStore,
  applyMiddleware
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import thunk from 'redux-thunk'

import reducer from './reducers/'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
)

const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware, thunk)
)

const persistor = persistStore(store)

export { store, persistor }
