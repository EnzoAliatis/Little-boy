import React from 'react'
import {
  createStackNavigator,
  createTabNavigator
} from 'react-navigation'

import Home from './screens/containers/home'
import InitialLoadingLayout from './screens/components/initial-loading-layout';
import Header from './utils/header';
import SubjectDescription from './screens/containers/subject-description'

// AQUI TUS COMPOMENTES SCREENS

const Main = createStackNavigator({
  InitialLoadingLayout: {
    screen: Home,
    navigationOptions: {
      header: Header
    }
  },
  SubjectDescription: {
    screen: SubjectDescription
  }
})


export default Main