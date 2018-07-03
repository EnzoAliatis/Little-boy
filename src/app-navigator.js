import React from 'react'
import {
  createStackNavigator,
  createTabNavigator
} from 'react-navigation'

import Home from './screens/containers/home'

// AQUI TUS COMPOMENTES SCREENS

const Main = createStackNavigator({
  Home
})


export default Main