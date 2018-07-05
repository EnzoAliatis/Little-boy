import React from 'react'
import {
  createStackNavigator,
  createTabNavigator
} from 'react-navigation'

import Home from './screens/containers/home'
import InitialLoadingLayout from './screens/components/initial-loading-layout';
import Header from './utils/header';

// AQUI TUS COMPOMENTES SCREENS

const Main = createStackNavigator({
  InitialLoadingLayout: {
    screen: Home,
  }
}, {
  navigationOptions: {
    header: Header
  }
})


export default Main