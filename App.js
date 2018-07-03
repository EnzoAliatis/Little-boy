import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'


import InitialLoading from 'src/sections/components/initial-loading'
import AppNavigatorWithState from './src/app-navigation-with-state'


type Props = {};
export default class App extends Component<Props> {
  render() {
    // console.disableYellowBox = true
    <Provider store={store}>
      <PersistGate
        loading={<InitialLoading />}
        persistor={persistor}
      >
        <AppNavigatorWithState />
      </PersistGate>
    </Provider>
  }
}