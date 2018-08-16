import React from 'react'
import {
  createStackNavigator,
  createTabNavigator
} from 'react-navigation'

import Home from './screens/containers/home'
import InitialLoadingLayout from './screens/components/initial-loading-layout';
import Header from './utils/header';
import SubjectDescription from './screens/containers/subject-description'
import HomeworkList from './screens/containers/homework-list'
import EvaluationList from './screens/containers/evaluation-list'
import MaterialList from './screens/containers/material-list'
import PdfContainer from './screens/containers/pdf-container';

// AQUI TUS COMPOMENTES SCREENS

const Main = createStackNavigator({
  InitialLoadingLayout: {
    screen: Home,
    navigationOptions: {
      header: Header
    }
  },
  SubjectDescription: {
    screen: SubjectDescription,
  },
  HomeworkList: {
    screen: HomeworkList
  },
  EvaluationList: {
    screen: EvaluationList,
  },
  MaterialList: {
    screen: MaterialList
  }
}, 
{
  navigationOptions: {
    headerStyle: {height: 50}
  },
  headerTransitionPreset: 'uikit'
})


export default Main