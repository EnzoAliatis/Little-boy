import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'


import AppNavigatorWithState from './src/app-navigator-with-state'
import LoadingScreen from './src/utils/components/loading-screen';


type Props = {};
export default class App extends Component<Props> {
  render() {
    // console.disableYellowBox = true
    return (
      <Provider store={store}>
        <PersistGate
          loading={<LoadingScreen />}
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    )
  }
}