import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'


import AppNavigatorWithState from './src/app-navigator-with-state'
import InitialLoadingLayout from './src/utils/components/initial-loading-layout';


type Props = {};
export default class App extends Component<Props> {
  render() {
    // console.disableYellowBox = true
    return (
      <Provider store={store}>
        <PersistGate
          loading={<InitialLoadingLayout />}
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    )
  }
}